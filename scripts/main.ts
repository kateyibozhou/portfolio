interface CaseStudy {
  title: string;
  year: string;
  tags: string;
  image: string;
  summary: string;
}

document.addEventListener('DOMContentLoaded', () => {
  const caseStudies: CaseStudy[] = [
    {
      title: 'Boosting User Renewal Rate at ExpressVPN',
      year: '2015-2019',
      tags: 'A few tags, here, and there. Or summary',
      image: './images/dash.png',
      summary: 'TODO: A wonderful wonderful summary'
    },
    {
      title: 'Case Study 2',
      year: '2021',
      tags: 'Graphic Design, Web Design',
      image: './images/dash.png',
      summary: 'Short description...'
    },
    {
      title: 'Case Study 3',
      year: '2022',
      tags: 'Product UI/UX, Web Design',
      image: './images/dash.png',
      summary: 'Short description...'
    }
  ];

  const container = document.getElementById('case-studies-container') as HTMLElement;
  const template = document.getElementById('case-study-template') as HTMLTemplateElement;

  caseStudies.forEach((study, index) => {
    const clone = document.importNode(template.content, true);
    (clone.querySelector('.case-study-number') as HTMLElement).textContent = `${index + 1}/${caseStudies.length}`;
    (clone.querySelector('.case-study-title') as HTMLElement).textContent = study.title;
    (clone.querySelector('.case-study-timeframe') as HTMLElement).textContent = study.year;
    (clone.querySelector('.case-study-tags') as HTMLElement).textContent = study.tags;
    (clone.querySelector('.case-study-summary') as HTMLElement).textContent = study.summary;
    (clone.querySelector('.case-study-image') as HTMLImageElement).src = study.image;
    container.appendChild(clone);
  });
});