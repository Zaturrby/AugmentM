angular.module('templates-cth', ['caseStudy/caseStudy.html', 'common/templates/logo-blank.html', 'common/templates/logo.html', 'post/postItem.html', 'post/postList.html', 'process/process.html', 'prototype/prototype.html']);

angular.module("caseStudy/caseStudy.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("caseStudy/caseStudy.html",
    "<section ui-sref-active=\"active\">\n" +
    "	<p> Im the case study Template </p>\n" +
    "\n" +
    "</section>");
}]);

angular.module("common/templates/logo-blank.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/templates/logo-blank.html",
    "<svg id=\"logo-blank\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 424 244\" enable-background=\"new 0 0 424 244\" xml:space=\"preserve\">\n" +
    "  <g></g>\n" +
    "  <rect x=\"18\" y=\"18\" width=\"282\" height=\"65\" class=\"style0\"/>\n" +
    "  <rect x=\"18\" y=\"90\" width=\"174\" height=\"65\" class=\"style0\"/>\n" +
    "  <rect x=\"18\" y=\"162\" width=\"388\" height=\"65\" class=\"style0\"/>\n" +
    "  </g>\n" +
    "</svg>\n" +
    "");
}]);

angular.module("common/templates/logo.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/templates/logo.html",
    "<svg class=\"logo\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 424 244\" enable-background=\"new 0 0 424 244\" xml:space=\"preserve\">\n" +
    "  <g>\n" +
    "  <g>\n" +
    "  <path d=\"M84.6 44.143c-4.02 0-6.3 2.1-6.3 7.44s2.28 7.4 6.3 7.44c4.02 0 6.299-2.1 6.299-7.44 S88.619 44.1 84.6 44.143z\" class=\"logo\"/>\n" +
    "  <path d=\"M222.238 50.803c0 4 1.7 6.7 5.8 6.66c2.46 0 4.08-0.96 5.22-1.98v-9.36 c-1.14-1.02-2.76-1.98-5.22-1.98C223.917 44.1 222.2 46.8 222.2 50.803z\" class=\"style0\"/>\n" +
    "  <path d=\"M114.239 51.583c0 4.5 1.6 7.3 5.6 7.32c2.46 0 4.32-1.02 5.34-1.98v-10.68 c-1.02-0.96-2.88-1.98-5.34-1.98C115.799 44.3 114.2 47.1 114.2 51.583z\" class=\"style0\"/>\n" +
    "  <path d=\"M18 18v65h282V18H18z M152.278 25.664h9.48v8.28h-9.48V25.664z M49.02 58.483c4.2 0 5.879-2.04 6.18-6.72 h8.52c-0.6 9.06-5.28 13.859-14.759 13.859c-11.22 0-15.6-6.72-15.6-17.699c0-11.16 4.5-18.299 16.02-18.299 c9.359 0 13.9 4.7 14.3 13.919H55.2c-0.3-4.68-2.16-6.78-6.3-6.78c-5.82 0-6.96 4.14-6.96 10.859S43.08 58.5 49 58.483z M84.419 65.623c-7.02 0-14.459-3.18-14.459-13.919c0-10.979 7.8-14.1 14.819-14.1c7.08 0 14.5 3.2 14.5 13.9 C99.239 62.4 91.4 65.6 84.4 65.623z M133.258 65.022h-7.14v-3.6c-1.32 1.92-4.38 4.2-8.939 4.2 c-6.24 0-11.28-4.32-11.28-13.979c0-10.02 5.46-14.04 11.28-14.04c4.379 0 7 2.3 8 3.48V25.664h8.04V65.022z M169.258 65.022h-25.319v-6.06h9.06v-14.7h-9.06v-6.06h17.099v20.759h8.22V65.022z M205.197 65.022h-8.04V49.843 c0-3.78-0.96-5.52-4.2-5.52c-2.16 0-3.72 0.72-4.92 1.92v18.779h-8.04V38.204h7.14v3.6c1.32-1.979 4.08-4.2 8.64-4.2 c4.8 0 9.4 2.5 9.4 10.8V65.022z M241.257 65.442c0 7.62-4.979 11.28-13.919 11.28c-5.64 0-12.54-1.44-12.839-10.62h7.68 c0.24 2.5 1.2 4.8 5.6 4.8c4.92 0 5.46-2.88 5.46-6.12v-4.14c-1.32 1.5-3.6 3.36-7.8 3.36c-6.419 0-11.52-4.32-11.52-13.08 c0-8.819 5.22-13.319 11.58-13.319c4.32 0 7.4 2.1 8.6 4.02v-3.42h7.14V65.442z M281.276 71.982h-33.359v-6.959h33.359V71.982z\" class=\"style0\"/>\n" +
    "  </g>\n" +
    "  <g>\n" +
    "  <path d=\"M120.599 115.664c-2.7 0-5.339 1.02-6.18 4.439h12.36C125.938 116.7 123.3 115.7 120.6 115.664z\" class=\"style0\"/>\n" +
    "  <path d=\"M18 90v65h174V90H18z M62.699 116.263H49.44v8.58c0 4.3 0.8 6.1 4.9 6.12c2.76 0 5.34-0.84 7.14-1.56 v6.3c-1.98 0.9-5.1 1.92-9.18 1.92c-7.08 0-10.859-3.12-10.859-12.479v-8.88h-8.34v-6.06h8.34v-12.54h8.04v12.54h13.259V116.263z M97.199 137.022h-8.04v-15.179c0-3.78-0.96-5.52-4.2-5.52c-2.64 0-4.26 1.2-4.92 1.92v18.779H72V97.664h8.04v15.479 c1.14-1.38 3.3-3.54 7.919-3.54c4.92 0 9.2 2.5 9.2 10.8V137.022z M135.058 124.963h-20.759c0 3.8 1.9 6.6 6.8 6.6 c3 0 5.22-1.02 5.58-2.94h8.28c-1.44 6.72-7.44 9-13.919 9c-8.34 0-14.879-3.78-14.879-13.859c0-10.8 7.5-14.16 14.699-14.16 c7.439 0 14.2 3.5 14.2 13.979V124.963z M173.278 143.982h-33.359v-6.959h33.359V143.982z\" class=\"style0\"/>\n" +
    "  </g>\n" +
    "  <g>\n" +
    "  <path d=\"M336.596 187.664c-2.7 0-5.339 1.02-6.18 4.439h12.36C341.936 188.7 339.3 187.7 336.6 187.664z\" class=\"style0\"/>\n" +
    "  <path d=\"M150.239 201.643c0 1.7 1.4 2.5 3.8 2.46c3.24 0 5.82-1.26 6.66-1.98v-2.76 c-0.84-0.18-3.3-0.36-5.22-0.36C152.458 199 150.2 199.5 150.2 201.643z\" class=\"style0\"/>\n" +
    "  <path d=\"M18 162v65h388v-65H18z M296.276 169.664h9.48v8.28h-9.48V169.664z M224.277 169.664h9.48v8.28h-9.48 V169.664z M61.199 209.022H52.86v-14.219h-8.52v14.219H36v-34.739h8.339v13.56h8.52v-13.56h8.339V209.022z M97.199 209.022h-7.14 v-3.6c-1.32 1.98-4.08 4.2-8.64 4.2c-4.8 0-9.419-2.46-9.419-10.8v-16.619h8.04v15.179c0 3.8 1 5.5 4.2 5.5 c2.16 0 3.72-0.72 4.92-1.92v-18.779h8.04V209.022z M135.958 209.022h-6.899v-17.519c0-2.4-0.42-3.72-1.98-3.72 c-1.5 0-2.7 1.32-3.06 1.92v19.319h-6.839v-17.519c0-2.4-0.42-3.72-1.98-3.72c-1.5 0-2.7 1.32-3.06 1.92v19.319h-6.9v-26.819h6 v3.66c0.84-1.5 2.82-4.26 6.72-4.26c3.18 0 4.9 1.9 5.5 3.9c0.48-0.78 2.4-3.9 6.479-3.9c4.86 0 6.1 4.4 6.1 9.06V209.022z M172.258 208.422c-1.2 0.6-3.48 1.2-5.58 1.2c-3.54 0-4.68-1.68-4.68-3.84v-0.54c-1.38 1.74-4.38 4.38-10.08 4.4 c-5.28 0-9.719-2.34-9.719-7.74c0-6.12 5.64-7.86 11.459-7.86c3.06 0 5.8 0.5 7.1 0.84v-2.04c0-2.88-0.66-5.04-4.98-5.04 c-3.06 0-5.16 1.08-5.16 3.84h-7.5c0-7.08 5.64-10.02 13.139-10.02c6.9 0 12.5 2.5 12.5 10.56v10.02 c0 1 0.4 1.4 1.4 1.38c0.66 0 1.62-0.18 2.1-0.3V208.422z M205.197 209.022h-8.04v-15.179c0-3.78-0.96-5.52-4.2-5.52 c-2.16 0-3.72 0.72-4.92 1.92v18.779h-8.04v-26.819h7.14v3.6c1.32-1.979 4.08-4.2 8.64-4.2c4.8 0 9.4 2.5 9.4 10.8V209.022z M241.257 209.022h-25.319v-6.06h9.06v-14.7h-9.06v-6.06h17.099v20.759h8.22V209.022z M278.696 188.263h-13.259v8.58 c0 4.3 0.8 6.1 4.9 6.12c2.76 0 5.34-0.84 7.14-1.56v6.3c-1.98 0.9-5.1 1.92-9.18 1.92c-7.08 0-10.859-3.12-10.859-12.479 v-8.88h-8.34v-6.06h8.34v-12.54h8.04v12.54h13.259V188.263z M313.256 209.022h-25.319v-6.06h9.06v-14.7h-9.06v-6.06h17.099v20.759 h8.22V209.022z M351.055 196.963h-20.759c0 3.8 1.9 6.6 6.8 6.6c3 0 5.22-1.02 5.58-2.94h8.28c-1.44 6.72-7.44 9-13.919 9 c-8.34 0-14.879-3.78-14.879-13.859c0-10.8 7.5-14.16 14.699-14.16c7.439 0 14.2 3.5 14.2 13.979V196.963z M372.235 209.6 c-7.68-0.06-13.919-2.16-14.099-9h8.219c0.24 2.6 2.9 3.3 6.5 3.3c3.12 0 5.88-0.54 5.88-2.46c0-2.22-3.9-2.4-9.18-3.24 c-5.16-0.84-10.86-2.16-10.86-8.16c0-5.939 5.64-8.459 13.68-8.459c7.02 0 12.7 1.9 13.1 8.52h-8.22 c-0.36-2.28-3-2.82-5.64-2.82c-2.82 0-4.68 0.6-4.68 2.16c0 1.9 2.9 2.2 9.2 3.06c5.28 0.7 10.9 2.2 10.9 8.3 C387.055 207.5 380.3 209.7 372.2 209.623z\" class=\"style0\"/>\n" +
    "  </g>\n" +
    "  </g>\n" +
    "</svg>\n" +
    "\n" +
    "");
}]);

angular.module("post/postItem.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("post/postItem.html",
    "<div class=\"post\"\n" +
    "     id=\"{{post.id}}\" \n" +
    "     ui-sref-active=\"active\" class=\"active\" \n" +
    "     ng-class=\"{selected: post.selected, expanded:post.expanded}\">\n" +
    "\n" +
    "\n" +
    "    <header>\n" +
    "      <a ng-show=\"!post.selected\" \n" +
    "         class=\"state-link\"\n" +
    "         href ui-sref=\"posts.post({post_id: post.id})\">\n" +
    "\n" +
    "        <img ng-src=\"{{post.headerImage.url}}\"/>\n" +
    "\n" +
    "        <h1>{{post.title | underscorize}}</h1>\n" +
    "\n" +
    "      </a>\n" +
    "      <a ng-show=\"post.selected\" \n" +
    "         class=\"expansion-link\"\n" +
    "         ng-click=\"toggleExpanded()\">\n" +
    "        <img ng-src=\"{{post.headerImage.url}}\"/>\n" +
    "\n" +
    "        <h1>{{post.title | underscorize}}</h1>\n" +
    "\n" +
    "      </a>\n" +
    "    </header>\n" +
    "\n" +
    "    <section class=\"text-content col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-1 col-lg-6 col-lg-offset-2 csSlideUp\">\n" +
    "      <div ng-bind-html=\"post.content | markdown\"></div>\n" +
    "    </section>\n" +
    "\n" +
    "\n" +
    "    <section class=\"meta col-xs-12 col-md-2 col-md-offset-1 col-lg-2 col-lg-offset-2\">\n" +
    "      <table class=\"table\">\n" +
    "        <thead>\n" +
    "          <th>Meta</th>\n" +
    "        </thead>\n" +
    "        <tr ng-repeat=\"author in post.authors\">\n" +
    "          <td>{{author}}</td>\n" +
    "        </tr>\n" +
    "      </table>\n" +
    "    </section>\n" +
    "\n" +
    "  </article>\n" +
    "</div>\n" +
    "");
}]);

angular.module("post/postList.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("post/postList.html",
    "<section ui-sref-active=\"active\" \n" +
    "         class=\"triggered\"\n" +
    "         class=\"posts\">\n" +
    "\n" +
    "  <post-item ng-repeat=\"post in postList.posts | filter:{ tags: app.postFilter }| orderBy:app.postOrder\"\n" +
    "             selected=\"{{post.selected}}\"\n" +
    "             post=\"post\">\n" +
    "  </post-item>\n" +
    "</section>\n" +
    "");
}]);

angular.module("process/process.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("process/process.html",
    "<section>\n" +
    "	<p> Im the process Template </p>\n" +
    " <!-- ui-sref-active=\"active\" -->\n" +
    "</section>");
}]);

angular.module("prototype/prototype.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("prototype/prototype.html",
    "<section>\n" +
    "	<p> Im the Prototype Template </p>\n" +
    " <!-- ui-sref-active=\"active\" -->\n" +
    "</section>");
}]);
