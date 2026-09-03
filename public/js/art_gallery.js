// ART GALLERY
// Collapsing and Opening Galleries
function gal2026() {
    var gallery2026 = document.getElementById("a2026");

    if (gallery2026.style.display === "flex") {
        gallery2026.style.display = "none";
    } else {
        gallery2026.style.display = "flex";
    }
}

function gal2025() {
    var gallery2025 = document.getElementById("a2025");

    if (gallery2025.style.display === "flex") {
        gallery2025.style.display = "none";
    } else {
        gallery2025.style.display = "flex";
    }
}

function gal2024() {
    var gallery2024 = document.getElementById("a2024");

    if (gallery2024.style.display === "flex") {
        gallery2024.style.display = "none";
    } else {
        gallery2024.style.display = "flex";
    }
}

// ANIMATION SECTION
function animgal2026() {
    var anim_gallery2026 = document.getElementById("anim2026");

    if (anim_gallery2026.style.display === "flex") {
        anim_gallery2026.style.display = "none";
    } else {
        anim_gallery2026.style.display = "flex";
    }
}

// MODAL 
function modal_open() {
    var modal = document.getElementById("modal");
    var img = event.currentTarget;
    var modal_img = document.getElementById("modal_img");
    var modal_txt = document.getElementById("modal_txt");

    modal_img.src = img.src;
    modal_txt.textContent = img.alt;    
    modal.style.display = "grid";
}

function modal_close() {
    var modal = document.getElementById("modal");
    
    modal.style.display = "none";
}

function anim_modal_open() {
    var modal = document.getElementById("modal");
    var vid = event.currentTarget.firstElementChild;
    var vid_txt = event.currentTarget;
    var modal_vid = document.getElementById("modal_video");
    var modal_txt = document.getElementById("modal_txt");
    
    modal_vid.firstElementChild.src = vid.src;
    modal_vid.load();
    modal_txt.textContent = vid_txt.ariaLabel;
    modal.style.display = "grid";
}