Vue.component('textblock',{
    props: ['title', 'subtitle'],
    data: function() {
        return {
            text: text[this.title]
        }
    },

    template: 
    `<div class="items">
        <div class="item-title">{{text.title}}</div>
        <div class="item-subtitle">{{text.subtitle}}</div>
        <ul class="item-body">
            <li v-for="point in text.points">{{point}}</li>
        </ul>
        <ul class="item-tags">
            <li v-for="tag in text.tags">{{tag}}</li>
        </ul>
    </div>`
});

const text = {
    YORK: {
        title: 'York University',
        subtitle: 'Hons. B.Sc Computer Science Student',
        points: ['CGPA: 3.8 / 4.0', 'Notable Courses: Discrete Mathematics, Programming for Mobile Computing, Applied Calculus I & II, Intro. to Computer Science & Programming.']
    },

    BIKEHUB: {
        title: 'CultureLink Bike Hub',
        subtitle: 'Bike Mechanic and Front-Desk Attendant',
        points: ['Demonstrated the ability to communicate and assist visitors with mechanical concerns.', 'Successfully salvaged, repaired, and assembled over 50 different bicycles.','Supported the biannual bicycle workshops for newcomers by taking an active role in demonstrating assembly, repairs, and salvages.']
    },

    PYGAME: {
        title: 'Jellyfish Blaster',
        subtitle: 'Animated Python Game',
        points: ['Successfully created an environment to load and transform two-dimensional game assets, with or without user interaction.','Facilitated the process of fetching and loading animations by organizing bulk image folders into specialized folders per animation with the OS module.'],
        tags: ['Python', 'Pygame', 'Os Module']
    }, 

    DISCORDBOT: {
        title: 'Tabikat Bot',
        subtitle: 'Personal Discord.js Bot',
        points: ['Utilized Discord API and MongoDB documentation to create an interactive message bot.','Implemented user-friendly and convenient commands (grade calculator, reminders, etc).'],
        tags: ['Discord.js', 'JavaScript', 'MongoDB', 'Git', 'Ms Module']
    },

    GITPAGES: {
        title: 'Ricky Tran',
        subtitle: 'Personal Portfolio',
        points: ['Developed a simple website resume using HTML, CSS, and JavaScript.', 'Utilized Github Pages to statically host a website.','Implemented Vue Components and simplified the process of adding onto the website'],
        tags: ['HTML', 'JavaScript', 'CSS', 'Vue Components', 'Git Pages'], 
    }
}

const LASSONDE = new Vue({el: '#LASSONDE'})
const BIKEHUB = new Vue({el: '#BIKEHUB'})
const PYGAME = new Vue({el: '#PYGAME'})
const DISCORD = new Vue({el: '#DISCORD'})
const GITPAGES = new Vue({el: '#GITPAGES'})

console.log(text.GITPAGES.color)