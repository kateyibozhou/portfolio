document.addEventListener('DOMContentLoaded', function () {
    var projectContainer = document.getElementById('project-container');
    var projectData = {
        title: 'Boosting User Renewal Rate at ExpressVPN',
        year: '2015-2019',
        tags: 'UX Design, Research, Analytics',
        summary: 'This project involved improving the user renewal rate at ExpressVPN by conducting thorough user research, implementing new UX design strategies, and analyzing user behavior data.',
        images: [
            { path: './images/project1-image1.jpg', alt_text: 'Project Image 1' },
            { path: './images/project1-image2.jpg', alt_text: 'Project Image 2' }
        ]
    };
    var projectTemplate = "\n      <header class=\"project-header\">\n        <h1 class=\"project-title\">".concat(projectData.title, "</h1>\n        <p class=\"project-year\">").concat(projectData.year, "</p>\n        <p class=\"project-tags\">").concat(projectData.tags, "</p>\n      </header>\n      <main class=\"project-main\">\n        ").concat(projectData.images.map(function (image) { return "\n          <img src=\"".concat(image.path, "\" alt=\"").concat(image.alt_text, "\" class=\"project-image\">\n        "); }).join(''), "\n        <p class=\"project-summary\">").concat(projectData.summary, "</p>\n      </main>\n    ");
    projectContainer.innerHTML = projectTemplate;
});
