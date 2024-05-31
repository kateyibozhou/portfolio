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
            summary: 'Global renewal revenue increased by 83%',
            full_viewport: true
        },
        {
            title: 'Development Bank of Singapore Information Architecture',
            local_path: './posts/product-design-ux/dbs-info-arch.html',
            year: '2022',
            tags: 'Product Design, UX Design',
            preview_image: {
                path: './images/dash.png',
                alt_text: 'Full page view of The Development Bank of Singapore (DBS) website.'
            },
            summary: 'Spearheaded the development of a user-centric Information Architecture for Treasury & Markets content, resulting in significant improvements in user engagement, navigation efficiency, and new business opportunities',
            full_viewport: false
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
            summary: 'Delivered localised digital and physical campaign assets for both markets.',
            full_viewport: false
        },
    ];
    const container = document.getElementById('case-studies-container');
    const template = document.getElementById('case-study-template');
    caseStudies.forEach((study, index) => {
        var _a;
        const clone = document.importNode(template.content, true);
        // All case studies are wrapped in an article element with class 'case-study-view'
        // Each case-study-view has either one case study occupying the full viewport or two case studies side by side
        const caseStudyView = clone.querySelector('.case-study-view');
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
        // for case studies with full viewport, add the class 'full-viewport' to the case study
        if (study.full_viewport) {
            caseStudyView.classList.add('full-viewport');
            container.appendChild(clone);
        }
        else {
            // this this case-study-view will either start a new half-viewport (on the left side)
            // or be added to the existing half-viewport on the right side
            // if the last child of the container is a half-viewport, add this case study to the right side
            // How do we detect that? We can check if the last grid has only one child
            // How do we access the last grid? check for class case-study-grid and its child count
            if (((_a = container.lastElementChild) === null || _a === void 0 ? void 0 : _a.classList.contains('case-study-grid')) && container.lastElementChild.childElementCount === 1) {
                // add this case study to the right side
                // add half-viewport class to the case-study-view
                caseStudyView.classList.add('half-viewport');
                container.lastElementChild.appendChild(clone);
            }
            else 
            // Create a div with class 'case-study-grid' to wrap the two case studies
            // Add the first case study to the left side of the grid
            // Add the second case study to the right side of the grid
            // Append the grid to the container
            {
                const grid = document.createElement('div');
                grid.classList.add('case-study-grid');
                // add half-viewport class to the case study, since this is the
                // first case study in the grid
                caseStudyView.classList.add('half-viewport');
                grid.appendChild(clone);
                container.appendChild(grid);
            }
        }
    });
});
