var example1 = new Vue ({
    el: '#example-1',
    data: {
        counter: 0,
    },
    methods: {
        handleClick(event) {
            console.log('click', event.target);
            this.counter +=1;
        },
        
        handleSubmitForm(e){
            console.log(e);
        }
        
    }
})

var count = new Vue ({
    el: '#count',
    data: {
        message: ''
    }
})

var select = new Vue ({
    el: '#select',
    data: {
        selected: '',
        options: [
            { text: 'Com tron', value: '50k' },
            { text: 'Mi Y', value: '70k' }
        ]
    }
})

var example2 = new Vue ({
    el: '#example-2',
    data:{
        tabSelected: 'login'
    },
    methods: {
        changeTab(tab){
            this.tabSelected = (tab)
        }
    } 
})

var example3 = new Vue ({
    el: '#example-3',
    data: function(){
        return {
            
            clientX: 0,
            clientY: 0
            }
    },
    methods: {
        handleMouseMove(e){
            console.log(e);
            this.clientX = e.clientX;
            this.clientY = e.clientY;
        },
        handleMouseMoveChild(e){
            console.log(e);
        },

    },
})

var app = new Vue({
    el: '#app',
    data: function(){
        return {
        list: [],
        todo: "",
        }
    },
    methods: {
      add() {
        this.todo = this.todo.trim();
  
        if (!this.todo.length) 
            return;
  
        this.list.push(this.todo);
        this.todo = "";
      },
    },
  });
  

