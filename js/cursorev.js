AFRAME.registerComponent("cursorlist",{
schema:{
selected:{default:"",type:"string"}

},
init:function(){
this.handleMouseEnter()
this.handmouseleave()
},
handleplacelist:function(){
    const id = this.el.getAttribute("id");
    const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursorlist", {
        selected: id,
      });
      this.el.setAttribute("material", {
        color: "#D76B30",
        opacity: 1,
      })
    }



},
handleMouseEnter: function () {   
    this.el.addEventListener("mouseenter", () => {
      this.handleplacelist();
    });
  },
handmouseleave:function(){
    this.el.addEventListener("mouseleave", () => {
        const { selected } = this.data;
        if (selected) {
          const el = document.querySelector(`#${selected}`);
          const id = el.getAttribute("id");
          if (id == selected) {
            el.setAttribute("material", {
              color: "#0077CC",
              opacity: 1,
            });
          }
        }
      });
    },

})