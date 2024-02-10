document.getElementById('btnSwitch').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const moonIcon = '<i class="fa-solid fa-moon"></i>';
    const sunIcon = '<i class="fa-solid fa-sun"></i>';
    const lightFile = '<i class="fa-solid fa-file-pdf"></i>';
    const darkFile = '<i class="fa-regular fa-file-pdf"></i>';
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        document.getElementById('btnSwitch').innerHTML = moonIcon;
        document.getElementById('cv').innerHTML = lightFile;
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        document.getElementById('btnSwitch').innerHTML = sunIcon;
        document.getElementById('cv').innerHTML = darkFile;
    }
});

function toggleMenu() {
    var btnMenu = document.getElementById("btnMenu");

    if (btnMenu.classList.contains("fa-ellipsis")) {
      btnMenu.classList.remove("fa-ellipsis");
      btnMenu.classList.add("fa-xmark");
    } else {
      btnMenu.classList.remove("fa-xmark");
      btnMenu.classList.add("fa-ellipsis");
    }
  }