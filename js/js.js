function menu(){
    document.getElementById("menu").innerHTML = '   <div class="dropdown menu" style="position: fixed;"><a class="menu-button" href="https://scholar.wavedm.net"><img src="./icon.png" width="75mm" alt="Home button"></a><a class="menu-button" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><img src="./menu.png" width="50mm" alt="Menu"></a><ul class="dropdown-menu" aria-labelledby="dropdownMenuLink"><li><div uk-lightbox><a class="dropdown-item" href="https://scholar.wavedm.net/search.html">Search</a></div></li><!--<li><a class="dropdown-item" href="#">Discover</a></li><li><a class="dropdown-item" href="#">Science</a></li><li><a class="dropdown-item" href="#">History</a></li><li><a class="dropdown-item" href="#">Culture</a></li><li><a class="dropdown-item" href="#">Faith</a></li> --><li><a class="dropdown-item" href="https://scholar.wavedm.net/#about">About</a></li><li><a class="dropdown-item" href="https://wavedm.churchcenter.com/people/forms/228365" target="_blank">Submit research</a></li><li><a class="dropdown-item" href="https://wavedm.churchcenter.com/people/forms/323784" target="_blank">Review a paper</a></li><li><a class="dropdown-item" href="https://scholar.wavedm.net/privacy.html">Privacy</a></li></ul></div>'
}

function footer(){
  document.getElementById("footer").innerHTML = ''
}
