document.addEventListener('DOMContentLoaded', () => {
    // Peta teks tautan ke nama file HTML
    const navLinks = {
        'Profil': 'profile.html',
        'Profil IDDC': 'profile.html',
        'Akademik': 'academic.html',
        'Aktifitas Kuliah': 'academic.html',
        'Kolaborasi': 'campus-life.html',
        'Kolaborasi Instansi': 'campus-life.html',
        'Kegiatan Ekstra': 'campus-life.html',
        'PMB': 'admissions.html',
        'Karya': 'gallery.html',
        'Karya Santri': 'gallery.html',
        'Alumni': 'alumni.html',
        'Dukungan': 'admissions.html'
    };

    // Update semua <a> tag
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        const text = link.textContent.trim();
        if (navLinks[text]) {
            link.href = navLinks[text];
        }
    });

    // Update <button> tag yang bertindak seperti link (misal "Dukungan")
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        const text = button.textContent.trim();
        if (navLinks[text]) {
            button.addEventListener('click', () => {
                window.location.href = navLinks[text];
            });
        }
    });

    // Jadikan logo dapat diklik dan mengarah ke index.html
    const logoImages = document.querySelectorAll('img[alt="IDDC Logo"]');
    logoImages.forEach(logo => {
        if (logo.parentElement.tagName !== 'A') {
            const logoLink = document.createElement('a');
            logoLink.href = 'index.html';
            logoLink.className = 'cursor-pointer inline-block';
            logo.parentNode.insertBefore(logoLink, logo);
            logoLink.appendChild(logo);
        }
    });
});
