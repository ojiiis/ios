        var si = document.getElementsByClassName('service-icon'), tu = document.getElementsByClassName('testimony-user');;
        for (let i = 0; i < si.length; i++) {
            si[i].style.backgroundImage = `url('${si[i].getAttribute('data')}')`;
        }
        for (let i = 0; i < tu.length; i++) {
            console.log(tu[i].getAttribute('data'))
            tu[i].style.backgroundImage = `url('${tu[i].getAttribute('data')}')`;
        }
        document.getElementById("show-app").onclick = () => {
            document.getElementById("hero").scrollIntoView();
        }

