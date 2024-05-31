interface image {
  path: string;
  alt_text: string;
}

interface CaseStudy {
  title: string;
  local_path: string;
  year: string;
  tags: string;
  preview_image: image;
  summary: string;
  full_viewport: boolean;
}

document.addEventListener('DOMContentLoaded', () => {
  const caseStudies: CaseStudy[] = [
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
      full_viewport: false
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
    {
      title: 'ExpressVPN Mobile Conversion Optimisation',
      local_path: './posts/product-design-ux/evpn-mobile-conversion-optimisation.html',
      year: '2023',
      tags: 'Product Design, UX Design, Product Management',
      preview_image: {
        path: './images/dash.png',
        alt_text: 'ExpressVPN plan renewal view on mobile'
      },
      summary: 'Design shipped globally, resulted in 18% boost in AOV, multi-million revenue boost',
      full_viewport: false
    },
    {
      title: 'Localisation for Shell APAC',
      local_path: './posts/product-design-ux/localisation-for-shell-apac-i.html',
      year: '2021',
      tags: 'Produce Design, UX Design',
      preview_image: {
        path: './images/dash.png',
        alt_text: 'Different views of Shell App on mobile'
      },
      summary: 'Design shipped globally, 23% increase in user adoption rates, 17% uplift in customer lifetime value',
      full_viewport: false
    },
    {
      title: 'Localisation for Shell Malaysia',
      local_path: './home/psc/z/yibo-gpt/portfolio/posts/product-design-ux/localisation-for-shell-malaysia.html',
      year: '2021',
      tags: 'Product Design, UX Design',
      preview_image: {
        path: './images/dash.png',
        alt_text: 'Samples views of Malaysia App on mobile'
      },
      summary: 'Design shipped across Malaysia',
      full_viewport: false
    },
    {
      title: 'ExpressVPN B2B Enterprise Dashboard',
      local_path: './posts/product-design-ux/evpn-enterprise-dashboard.html',
      year: '2021',
      tags: 'UX Design, Product Management',
      preview_image: {
        path: './images/dash.png',
        alt_text: 'Current ExpressVPN dashboard'
      },
      summary: 'Design shipped globally, 95% increase in customer satisfaction rate, 10 new multi-million dollar client contracts signed',
      full_viewport: false
    },
    {
      title: 'B2C launch of Phillips Vacuum Cleaner',
      local_path: './posts/service-design/phillips-b2c-vaccuum-launch.html',
      year: '2021',
      tags: 'Service Design, Campaign Design',
      preview_image: {
        path: './images/dash.png',
        alt_text: 'Sample assets of the launch campaign'
      },
      summary: 'Shipped in 2021',
      full_viewport: false
    },
    {
      title: 'Xiamen Hospital Communications Design',
      local_path: './posts/service-design/xiamen-hospital-comms.html',
      year: '2021',
      tags: 'Service Design',
      preview_image: {
        path: './images/dash.png',
        alt_text: 'Brand communication strategy planning design draft'
      },
      summary: 'Design identify I created is adopted by hospital. Identity is resulted in boost in patient experience metrics',
      full_viewport: false
    },
    {
      title: 'Rejoice branding and packaging for GC and APAC',
      local_path: './posts/branding/rejoice-branding.html',
      year: '2021',
      tags: 'Packaging Design, Branding',
      preview_image: {
        path: './images/dash.png',
        alt_text: 'Rejoice shampoo bottle packaging designs which shipped'
      },
      summary: 'Design shipped across GC and APAC, resulted in consumer visibility metrics and revenue',
      full_viewport: false
    },
    {
      title: 'Sephora Campaign Management and Optimisation',
      local_path: './posts/branding/sephora-campaign.html',
      year: '2021',
      tags: 'Branding, Campaign Design',
      preview_image: {
        path: './images/dash.png',
        alt_text: 'Sample campaign assets'
      },
      summary: 'Streamlined campaign resulted in boost in ROI, consumer engagement, and reduction in campaign launch delays',
      full_viewport: false
    },
    {
      title: 'SK-II Festive 2016',
      local_path: './posts/branding/sk-ii-festive.html',
      year: '2021',
      tags: 'Packaging Design, Branding',
      preview_image: {
        path: './images/dash.png',
        alt_text: ''
      },
      summary: 'Boosted consumer engagement and revenue, reduction in production costs and time-to-market',
      full_viewport: false
    },
    {
      title: '',
      local_path: '',
      year: '2021',
      tags: '',
      preview_image: {
        path: './images/dash.png',
        alt_text: ''
      },
      summary: '',
      full_viewport: false
    },
    {
      title: '',
      local_path: '',
      year: '2021',
      tags: '',
      preview_image: {
        path: './images/dash.png',
        alt_text: ''
      },
      summary: '',
      full_viewport: false
    },
  ];

  const container = document.getElementById('case-studies-container') as HTMLElement;
  const template = document.getElementById('case-study-template') as HTMLTemplateElement;

  caseStudies.forEach((study, index) => {
    const clone = document.importNode(template.content, true);
    const caseStudyView = clone.querySelector('.case-study-view') as HTMLElement;
    // (clone.querySelector('.case-study-number') as HTMLElement).textContent = `${index + 1}/${caseStudies.length}`;
    (clone.querySelector('.case-study-title') as HTMLElement).textContent = study.title;
    (clone.querySelector('.case-study-year') as HTMLElement).textContent = study.year;
    // (clone.querySelector('.case-study-tags') as HTMLElement).textContent = study.tags;
    (clone.querySelector('.case-study-summary') as HTMLElement).textContent = study.summary;
    (clone.querySelector('.case-study-image') as HTMLImageElement).src = study.preview_image.path;
    (clone.querySelector('.case-study-image') as HTMLImageElement).alt = study.preview_image.alt_text;
    // populate links for the case study with the local path
    const links = clone.querySelectorAll('.case-study-link') as NodeListOf<HTMLAnchorElement>;
    links.forEach(link => {
      link.href = study.local_path;
    });
    // for case studies with full viewport, add the class 'full-viewport' to the case study
    if (study.full_viewport) {
      caseStudyView.classList.add('full-viewport');
      container.appendChild(clone);
    } else {
      // this this case-study-view will either start a new half-viewport (on the left side)
      // or be added to the existing half-viewport on the right side
      // if the last child of the container is a half-viewport, add this case study to the right side
      // How do we detect that? We can check if the last grid has only one child
      // How do we access the last grid? check for class case-study-grid and its child count
      if ( container.lastElementChild?.classList.contains('case-study-grid') && container.lastElementChild.childElementCount === 1) {
        // add this case study to the right side
        // add half-viewport class to the case-study-view
        caseStudyView.classList.add('half-viewport');
        container.lastElementChild.appendChild(clone);

      } else
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