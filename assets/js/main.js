        var si = document.getElementsByClassName('service-icon'), tu = document.getElementsByClassName('testimony-user');;
        for (let i = 0; i < si.length; i++) {
            si[i].style.backgroundImage = `url('${si[i].getAttribute('data')}')`;
        }
        for (let i = 0; i < tu.length; i++) {
           
            tu[i].style.backgroundImage = `url('${tu[i].getAttribute('data')}')`;
        }
        document.getElementById("show-app").onclick = () => {
            document.getElementById("hero").scrollIntoView();
        }
        if(document.getElementById("mobile-menu-toggle")){
            document.getElementById("mobile-menu-toggle").onclick = function(){
                if(document.getElementById("d-nav").style.display == "" || document.getElementById("d-nav").style.display == "none"){
                      document.getElementById("d-nav").style.display = "flex";
                      document.getElementById("toggle-icon").classList.remove("fa-bars");
                      document.getElementById("toggle-icon").classList.add("fa-times");
                }else{
                     document.getElementById("d-nav").style.display = "";
                     document.getElementById("toggle-icon").classList.remove("fa-times");
                      document.getElementById("toggle-icon").classList.add("fa-bars");
                }
                 //console.log()
            }
        }
        var dm = document.querySelectorAll("#d-nav li");
        for(let i = 0; i < dm.length; i++){
            dm[i].onclick = function(){
                  document.getElementById("d-nav").style.display = "";
                     document.getElementById("toggle-icon").classList.remove("fa-times");
                      document.getElementById("toggle-icon").classList.add("fa-bars");
            }
        }

