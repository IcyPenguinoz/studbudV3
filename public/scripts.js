import Navigation from './components/navigation';
import './components/tasklist';
import './components/addButton';


const links = document.querySelectorAll('.top-nav > ul > li > a');
const pages = document.querySelectorAll('.page-container');

var nav = new Navigation(links, pages);
nav.getLinks();

nav.links.forEach(function(link) {
    link.addEventListener('click', function() {
        let pageId = nav.getHash(link);
        nav.setPage(pageId)
    })

})

var taskListArray = [];
console.log(taskListArray);
    
const subLinks = document.querySelectorAll('.sub-nav > ul > li > a');
const subPages = document.querySelectorAll('.sub-page-container');

var subNav = new Navigation(subLinks, subPages);

subNav.links.forEach((link) => {
    link.addEventListener('click', function(){
        let pageId = subNav.getHash(link);
        /*
        if(pageId == "page1-2") {
            console.log('kanban')
            initKanban(taskListArray);
        }
        */
        subNav.setPage(pageId);
    })
})


