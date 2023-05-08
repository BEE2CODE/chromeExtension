let myLeads = []
const inputEl= document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
 const ulEl = document.getElementById("ul-el")
 const leadFromLocalStorage= JSON.parse(localStorage.getItem("myLeads")) 
 const deleteBtn = document.getElementById("delete-btn")
 let tabBtn = document.getElementById("tab-btn")
 console.log(tabBtn)

// localStorage.setItem("myLeads", "www.bunmi.com") 
// console.log(localStorage.getItem("myLeads"))
// localStorage.clear()

if(leadFromLocalStorage){
  myLeads = leadFromLocalStorage;
  render(myLeads);

}

function render(lead) {
  let listItems = ""
  for (let i = 0; i < lead.length; i++) {
      listItems += `
          <li>
              <a target='_blank' href='${lead[i]}'>
                  ${lead[i]}
              </a>
          </li>
      `
  }
  ulEl.innerHTML = listItems  
}

const tabs = [
  {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]
tabBtn.addEventListener("click", function(){

  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  // })

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })



})

deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear()
  myLeads = []
  render(myLeads);
})


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value=''

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    
})













