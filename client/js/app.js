let $LanguageList, $LanguageForm, $LanguageName

let Languages;

document.addEventListener('DOMContentLoaded', init, false);
function init() {

    //get the div for cats
    $LanguageList = document.querySelector('#LanguageList');
    //get the form
    $LanguageForm = document.querySelector('#LanguageForm');
    $LanguageId = document.querySelector('#id');
    $LanguageName = document.querySelector('#name');
   /* $catAge = document.querySelector('#age');
    $catGender = document.querySelector('#gender');
    $catBreed = document.querySelector('#breed');
*/
    $LanguageForm.addEventListener('submit', saveLanguage, false);

    //listen for editLink clicks
    //document.addEventListener('click', editLanguage, false);

    //listen for deleteLink clicks
    document.addEventListener('click', deleteLanguage, false);

    loadLanguages();
}

function loadLanguages() {

    //new Date is a cache buster
    fetch('/api/Languages/')
    .then(res => res.json())
    .then(res => {
        //copy so we can edit later
        Languages = res;
        let s = '';
        res.forEach(Language => {
            s += `
<p>
<b>${Language.name}</b> 
[<a href="" title="Edit this Language" data-id="${Languag.id}" class="editLink">Edit</a>]
[<a href="" title="Delete this Language" data-id="${Language.id}" class="deleteLink">Delete</a>]
</p>`
        });
        $LanguageList.innerHTML = s;
    });
}

function saveLanguage(e) {
    e.preventDefault();

    let Language = {
        name: $LanguageName.value
        
    }

    let method = 'POST';

    // are we editing?
    if($LanguageId.value != '') {
        Language.id = Number($LanguageId.value);
        method = 'PUT';
    }

    fetch('/api/Languages/', {
        headers: {
            'Content-Type':'application/json'
        },
        method:method, 
        body:JSON.stringify(Language)
    })
    .then(res => res.json())
    .then(res => {
        console.log('Updated Language', res);
        $LanguageName.value = '';
        $LanguageId.value = '';
        loadLanguages();
    });

}

function editLanguage(e) {
    if(e.target.className !== 'editLink') return;
    e.preventDefault();
    let id = e.target.dataset.id;
    console.log('Edit language '+id);
    //find it in the cat list
    Languages.forEach(Language => {
        if(Language.id == id) {
            $LanguageId.value = Language.id;
            $LanguageName.value = Language.name;
        }
    });
}

function deleteLanguage(e) {
    if(e.target.className !== 'deleteLink') return;
    e.preventDefault();
    let id = e.target.dataset.id;
    console.log('Delete language '+id);
    //find it in the cat list
    Languages.forEach(Language => {
        if(Language.id == id) {

            fetch('/api/cats/'+Language.id, {
                method:'DELETE', 
            })
            .then(res => res.json())
            .then(res => {

                //clean up edit form in case they were editing it
                if($LanguageId.value == Language.id) {
                    $LanguageName.value = '';
                   
                    $LanguageId.value = '';
                }

                loadLanguages();

            });
        }

    });
}