"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const caseStudies = [
        {
            title: 'Boosting User Renewal Rate at ExpressVPN',
            local_path: './posts/product-design-ux/evpn-increase-user-renewal-rate.html',
            year: '2023',
            tags: 'Product Design, UX Design, Product Management',
            preview_image: {
                path: './images/dash.png',
                alt_text: 'User renewal banner page: before and after.'
            },
            summary: 'Global renewal revenue increased by 83%'
        },
        {
            title: 'The Development Bank of Singapore (DBS) Information Architecture',
            local_path: './posts/product-design-ux/dbs-info-arch.html',
            year: '2022',
            tags: 'Product Design, UX Design',
            preview_image: {
                path: './images/dash.png',
                alt_text: 'Full page view of The Development Bank of Singapore (DBS) website.'
            },
            summary: 'Spearheaded the development of a user-centric Information Architecture for Treasury & Markets content, resulting in significant improvements in user engagement, navigation efficiency, and new business opportunities'
        },
        {
            title: 'Phillips B2B GTM Launch design for TH and ANZ markets',
            local_path: './posts/service-design/phillips-b2b-gtm-launch.html',
            year: '2021',
            tags: 'Campaign Design, Launch Design',
            preview_image: {
                path: './images/dash.png',
                alt_text: 'A sample launch campaign delivery asset.'
            },
            summary: 'Delivered localised digital and physical campaign assets for both markets.'
        },
    ];
    const container = document.getElementById('case-studies-container');
    const template = document.getElementById('case-study-template');
    caseStudies.forEach((study, index) => {
        const clone = document.importNode(template.content, true);
        // Uncomment the following line to show the case study number
        // (clone.querySelector('.case-study-number') as HTMLElement).textContent = `${index + 1}/${caseStudies.length}`;
        clone.querySelector('.case-study-title').textContent = study.title;
        clone.querySelector('.case-study-year').textContent = study.year;
        // (clone.querySelector('.case-study-tags') as HTMLElement).textContent = study.tags;
        clone.querySelector('.case-study-summary').textContent = study.summary;
        clone.querySelector('.case-study-image').src = study.preview_image.path;
        clone.querySelector('.case-study-image').alt = study.preview_image.alt_text;
        // populate links for the case study with the local path
        const links = clone.querySelectorAll('.case-study-link');
        links.forEach(link => {
            link.href = study.local_path;
        });
        container.appendChild(clone);
    });
});
