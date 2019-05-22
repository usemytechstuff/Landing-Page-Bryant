class tabElement {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    const tabClass = tabElement.className;
    // this.tabClass = tabClass;
    
    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = document.querySelector(`.tab[data-tab='${tabElement.dataset.tab}']`);

    // if (this.tabState == "tab active-tab") {
    //   this.tabData.dataset.tab == "all";
    //    }
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    

    // Check to see if this.tabData is equal to 'all'
    
    if(this.tabData.dataset.tab == 'all' ){  
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll('.card');
    }   else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(`.card[data-tab='${tabElement.dataset.tab}']`);
    }
    
     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    // if (tabClass.length == 3) {
    //   this.cards = document.querySelectorAll('.card');
    //   this.cards = Array.from(this.cards).map(card =>  new TabCard(card));
      
    // } 

    this.cards = Array.from(this.cards).map(card =>  new TabCard(card));

    // Add a click event that invokes this.selectTab
    tabElement.addEventListener('click', () => this.selectTab(tabClass));
  }

  selectTab(tabClass){

    // Select all elements with the .tab class on them
    
    console.log(this.tabElement.className);
    const tabs = document.querySelectorAll('.tab');
    
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(tab => {
      tab.removeAttribute('class', 'active-tab');
      tab.setAttribute('class', 'tab');
    })

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card');

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(card => card.setAttribute('style', 'display:none'));
    
    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.setAttribute('class', 'tab active-tab');
    console.log(this.tabElement.className);
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    // this.cards.forEach(card => card.selectCard());
    
    this.cards.forEach(card => card.selectCard());
     
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.setAttribute('style', 'display:flex');
  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of tabElement and pass in each tab as a parameter

*/
let tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => new tabElement(tab))


