console.log("Hello, World!");

h1s = document.getElementsByTagName("h1")
h1 = h1s[0]
h1.innerHTML = 'Lab12 Assignment'
h1.style.color = 'blue'

document.body.appendChild(document.createElement('hr'))


const createTasks = (h2Text, pText, taskList) => {
    taskH2 = document.createElement('h2')
    taskH2.style.color = 'red'
    taskH2.innerHTML = h2Text
    document.body.appendChild(taskH2)

    taskP = document.createElement('p')
    taskP.innerHTML = pText
    document.body.appendChild(taskP)

    let ul = document.createElement('ul')
    for (let i = 0; i < taskList.length; i++) {
        task = document.createElement('li')
        task.innerHTML = taskList[i]
        if (i % 2 == 0) {
            task.style.color = 'green'
        } else {
            task.style.color = 'purple'
        }
        ul.appendChild(task)
    }
    document.body.appendChild(ul)
}

const tasks = ['find elements in the DOM <strong>(5 points)</strong>;', 
    'create/add/remove elements <strong>(5 points)</strong>;',
    'change content of the elements <strong>(5 points)</strong>;',
    'change styles of the elements <strong>(5 points)</strong>;',
    'change attributes of the elements <strong>(5 points)</strong>;',
    'change classes of the elements <strong>(5 points)</strong>.',]

const pTasksText = 'In this task you have to reproduce this HTML page as is using <strong> only </strong> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:'

createTasks('Task', pTasksText, tasks)

link = document.createElement("a");
link.setAttribute("href", "https://github.com/yessen/nu_web_programming/tree/main/week12");
link.innerText = "link";

p2 = document.createElement("p")
p2.innerHTML = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this "
p2.appendChild(link)
document.body.appendChild(p2)

document.body.appendChild(document.createElement('hr'))

submissionTasks = [
    'Create a new repository on Github, named <strong> lab12 (1 point). </strong>',
    'Clone this repository to your local machine and work inside it.',
    `Create a new HTML file, called <strong> index.html </strong>, which has only one h1 tag with "Hello, World!" message <strong>(1 point)</strong>.`,
    'Create a new JavaScript file, called <strong> main.js</strong>, which must contain your program (assignment) described above <strong>(1 point)</strong>.',
    'Link this <strong> main.js </strong> file to your <strong> index.html </strong> file (Note: place your script at the end of the <strong> body </strong> section).',
    'Write a JavaScript program in <strong> main.js </strong>  to make your <strong> index.html </strong>  look identical to this HTML file <strong> (5 points) </strong> .',
    'After you finish your work, submit it to the Github <strong>(2 points)/strong>.'
]

createTasks('Submission', 'To submit your work, follow these instructions:', submissionTasks)

document.body.appendChild(document.createElement('hr'))
