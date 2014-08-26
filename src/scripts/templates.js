angular.module('templates-cth', ['templates/case-study.html', 'templates/experiments.html', 'templates/home.html', 'templates/prototype.html']);

angular.module("templates/case-study.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/case-study.html",
    "<section class=\"caseTop\">\n" +
    "	<div class=\"designDiv\"></div>\n" +
    "	<div class=\"mainDiv\">\n" +
    "		<hr>\n" +
    "		<h1> Case Study </h1>\n" +
    "		<h2> User Camera Study </h2>\n" +
    "		<hr>\n" +
    "	</div>\n" +
    "	<div class=\"designDiv2\"></div>\n" +
    "</section>\n" +
    "<section class=\"blackTransition small\">\n" +
    "	<hr>\n" +
    "	<h2> A collaboration between:</h2>\n" +
    "	<img src=\"./images/logos/uvalogowhite.png\">\n" +
    "	<img src=\"./images/logos/rijkswhite.png\">\n" +
    "	<h2>Jan Hein Hoogstad - Johanna Barnbeck - Shailoh Philips</h2>\n" +
    "	<hr>\n" +
    "</section>\n" +
    "<article >\n" +
    "	<hr>\n" +
    "	<h3> The intro text </h3>\n" +
    "	<hr>\n" +
    "	<p class=\"boldAlinea\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum modi error qui minima nam quae incidunt provident minus et. Neque cumque, totam mollitia illum sed excepturi error expedita. Molestiae.</p>\n" +
    "\n" +
    "	<p>Dolor sit amet, consectetur adipisicing elit. Fugiat magni quam recusandae dolores nihil sed molestias quaerat neque corporis iste, dolorem earum aut rem natus atque eius ad animi ut, vitae nemo cum, at incidunt! Dignissimos aperiam, dolor. Sed dicta adipisci reiciendis, eum fugiat dolorem asperiores a ut. Sit assumenda neque eius reprehenderit maxime deleniti voluptate, praesentium error asperiores ratione! Reiciendis cumque obcaecati sint sapiente cum, adipisci, libero dolorem mollitia itaque dolor natus necessitatibus in eaque facilis distinctio quisquam. Ullam debitis porro corrupti, tenetur, distinctio, sunt cum laudantium obcaecati sint, incidunt cupiditate \n" +
    "	<img class=\"clearfix\" src=\"./images/ucs/1mrB/DSC00148.JPG\">\n" +
    "	</p>\n" +
    "\n" +
    "	<p>laboriosam soluta architecto culpa aut facilis dolorem commodi! Non beatae delectus facilis quae omnis ipsam incidunt dolorum esse culpa vitae quibusdam minus doloribus consequatur eligendi voluptas facere, fuga reiciendis natus, blanditiis temporibus? Sint dignissimos quas ullam officia, ex vitae perspiciatis reprehenderit. Sit repudiandae asperiores corporis quidem sunt placeat accusantium ea earum libero eius debitis fugit itaque ex id sapiente perspiciatis, sint animi exercitationem iusto cumque quae. </p>\n" +
    "\n" +
    "	<p>Cupiditate consequatur natus, quidem magnam accusantium quae temporibus corporis repudiandae eaque necessitatibus unde ab quod molestiae, cum tenetur, sint distinctio dolor, numquam officiis reiciendis error! Aliquid illo in assumenda quos repellat! Nobis, voluptate nihil! Tempora, consequatur cumque assumenda non dolorem debitis nam qui ullam repudiandae repellat necessitatibus quia quidem dolore recusandae odio culpa minima et laborum, ad voluptatum excepturi tenetur velit? Ipsam unde vel atque harum sit nulla, aliquam dolores animi voluptatem dolorem quas, vitae doloribus velit earum distinctio nostrum porro ullam error facilis iure aperiam, saepe repellat et. Architecto eum commodi facere ut dolor, voluptate tempore voluptatem vel rerum. Nam hic velit numquam eos quo fugiat modi, sequi aliquam libero, quam qui ipsum doloremque dicta recusandae neque, deleniti ipsam laborum esse minima at dolorum laudantium? At magnam soluta quidem rerum labore, nihil maiores praesentium, eum quas ad rem officiis, laboriosam non placeat minus.</p>\n" +
    "	<hr>\n" +
    "</article>\n" +
    "\n" +
    "<section class=\"casePersons\">\n" +
    "	<div class=\"identContainer clearfix\">\n" +
    "\n" +
    "		<div class=\"nameDiv clearfix\"> \n" +
    "			<img src=\"./images/icons/male-icon.png\" alt=\"\">\n" +
    "			<h2> Mister Bernard </h2>\n" +
    "			<p> Age: 25 </p>\n" +
    "			\n" +
    "			<p> Accompanied by:</p>\n" +
    "			<p> Friend </p>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"statsDiv clearfix\">	\n" +
    "			<div class=\"pictureStats clearfix\">\n" +
    "				<div class=\"mainPicture clearfix\">\n" +
    "					<h2>42</h2>\n" +
    "					<img src=\"./images/icons/camerawhite.png\" alt=\"\">\n" +
    "				</div>\n" +
    "				<div class=\"threeCatogoryPicture clearfix\">\n" +
    "					<p>Theme</p>\n" +
    "					<div class=\"paintings clearfix\">\n" +
    "						<img class=\"clearfix\" src=\"./images/icons/picturewhite.png\" alt=\"\">\n" +
    "						<div class=\"statBar bar1 clearfix\"></div>\n" +
    "						<img class=\"clearfix rightPicture\" src=\"./images/icons/sculpturewhite.png\" alt=\"\">\n" +
    "					</div>\n" +
    "					<div class=\"building clearfix\">\n" +
    "						<img class=\"clearfix\" src=\"./images/icons/buildingwhite.svg\" alt=\"\">\n" +
    "						<div class=\"statBar bar2 clearfix\"></div>\n" +
    "						<img class=\"clearfix rightPicture\" src=\"./images/icons/brandblusserwhite.png\" alt=\"\">\n" +
    "					</div>\n" +
    "					<div class=\"people clearfix\">\n" +
    "						<img class=\"clearfix\" src=\"./images/icons/peoplewhite.png\" alt=\"\">\n" +
    "						<div class=\"statBar bar3 clearfix\"></div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"timeStats clearfix\">\n" +
    "				<div class=\"time clearfix\">\n" +
    "					<p>Visit:</p>\n" +
    "					<img src=\"./images/icons/clockwhite.png\" alt=\"\" class=\"clearfix\">\n" +
    "					<div class=\"timeBar clearfix\">\n" +
    "						<p>90 min</p>\n" +
    "					</div>\n" +
    "				</div>	\n" +
    "				<div class=\"time clearfix\">\n" +
    "					<p>Interview:</p>\n" +
    "					<img src=\"./images/icons/clockwhite.png\" alt=\"\" class=\"clearfix\">\n" +
    "					<div class=\"timeBar timeBarSmall clearfix\">\n" +
    "						<p>45 min</p>\n" +
    "					</div>\n" +
    "				</div>	\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "<article>\n" +
    "	<hr>\n" +
    "	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum modi error qui minima nam quae incidunt provident minus et. Neque cumque, totam mollitia illum sed excepturi error expedita. Molestiae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia non totam porro amet possimus accusantium, doloribus esse, est veniam numquam animi. Id, enim distinctio veniam doloribus mollitia. Voluptas, possimus, excepturi!</p>\n" +
    "\n" +
    "	<p>Dolor sit amet, consectetur adipisicing elit. Fugiat magni quam recusandae dolores nihil sed molestias quaerat neque corporis iste, dolorem earum aut rem natus atque eius ad animi ut, vitae nemo cum, at incidunt! Dignissimos aperiam, dolor. Sed dicta adipisci reiciendis, eum fugiat dolorem asperiores a ut. Sit assumenda neque eius reprehenderit maxime deleniti voluptate, praesentium error asperiores ratione! Reiciendis cumque obcaecati sint sapiente cum, adipisci, libero dolorem mollitia itaque dolor natus necessitatibus in eaque facilis distinctio quisquam. Ullam debitis porro corrupti, tenetur, distinctio, sunt cum laudantium obcaecati sint, incidunt cupiditate </p>\n" +
    "\n" +
    "	<p>laboriosam soluta architecto culpa aut facilis dolorem commodi! Non beatae delectus facilis quae omnis ipsam incidunt dolorum esse culpa vitae quibusdam minus doloribus consequatur eligendi voluptas facere, fuga reiciendis natus, blanditiis temporibus? Sint dignissimos quas ullam officia, ex vitae perspiciatis reprehenderit. Sit repudiandae asperiores corporis quidem sunt placeat accusantium ea earum libero eius debitis fugit itaque ex id sapiente perspiciatis, sint animi exercitationem iusto cumque quae. Numquam totam illum atque molestiae tempore sed, recusandae minima exercitationem non quibusdam est amet Repellendus ut nemo velit, explicabo. Perspiciatis ratione soluta nihil nam ab voluptatem quos eos excepturi expedita molestiae accusamus delectus dolorum dicta, aspernatur fuga nulla quas, saepe, consectetur odio maiores esse cumque! Vel eaque, expedita doloribus, voluptates rerum molestiae nulla architecto dignissimos, esse porro voluptatibus omnis explicabo? Mollitia, provident sequi eligendi quia temporibus hic ex magnam aliquam nobis, earum omnis porro odit illo dolorum. Nemo esse officiis dolorum distinctio aperiam fugit optio eum non obcaecati, sapiente rem sit tempore facilis, saepe a eaque, totam neque. </p>\n" +
    "\n" +
    "	<p>Cupiditate consequatur natus, quidem magnam accusantium quae temporibus corporis repudiandae eaque necessitatibus unde ab quod molestiae, cum tenetur, sint distinctio dolor, numquam officiis reiciendis error! Aliquid illo in assumenda quos repellat! Nobis, voluptate nihil! Tempora, consequatur cumque assumenda non dolorem debitis nam qui ullam repudiandae repellat necessitatibus quia quidem dolore recusandae odio culpa minima et laborum, ad voluptatum excepturi tenetur velit? Ipsam unde vel atque harum sit nulla, aliquam dolores animi voluptatem dolorem quas, vitae doloribus velit earum distinctio nostrum porro ullam error facilis iure aperiam, saepe repellat et. Architecto eum commodi facere ut dolor, voluptate tempore voluptatem vel rerum. Nam hic velit numquam eos quo fugiat modi, sequi aliquam libero, quam qui ipsum doloremque dicta recusandae neque, deleniti ipsam laborum esse minima at dolorum laudantium? At magnam soluta quidem rerum labore, nihil maiores praesentium, eum quas ad rem officiis, laboriosam non placeat minus.</p>\n" +
    "	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum modi error qui minima nam quae incidunt provident minus et. Neque cumque, totam mollitia illum sed excepturi error expedita. Molestiae.</p>\n" +
    "	<hr>\n" +
    "</article>\n" +
    "\n" +
    "<section class=\"pictureGallery\">\n" +
    "	<h1>\"Interesting Quote about something\"</h1>\n" +
    "	<div class=\"conversation clearfix\">\n" +
    "		<hr>\n" +
    "		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum modi error qui minima nam quae incidunt provident minus et. Neque cumque, totam mollitia illum sed excepturi error expedita. Molestiae.</p>\n" +
    "		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum modi error qui minima nam quae incidunt provident minus et. Neque cumque, totam mollitia illum sed excepturi error expedita. Molestiae.</p>\n" +
    "		<hr>\n" +
    "	</div>\n" +
    "	<div id=\"owl-example\" class=\"owl-carousel owlGallery\">\n" +
    "		<img src=\"./images/ucs/1mrB/DSC00112.JPG\">\n" +
    "		<img src=\"./images/ucs/1mrB/DSC00117.JPG\">\n" +
    "		<img src=\"./images/ucs/1mrB/DSC00120.JPG\">\n" +
    "		<img src=\"./images/ucs/1mrB/DSC00122.JPG\">\n" +
    "		<img src=\"./images/ucs/1mrB/DSC00127.JPG\">\n" +
    "		<img src=\"./images/ucs/1mrB/DSC00129.JPG\">\n" +
    "		<img src=\"./images/ucs/1mrB/DSC00137.JPG\">\n" +
    "		<img src=\"./images/ucs/1mrB/DSC00141.JPG\">\n" +
    "		<img src=\"./images/ucs/1mrB/DSC00148.JPG\">\n" +
    "	</div>	\n" +
    "</div>\n" +
    "\n" +
    "</section>\n" +
    "\n" +
    "<article>\n" +
    "	<hr>\n" +
    "	<h3> The main text </h3>\n" +
    "	<hr>\n" +
    "	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum modi error qui minima nam quae incidunt provident minus et. Neque cumque, totam mollitia illum sed excepturi error expedita. Molestiae.</p>\n" +
    "	<p>Dolor sit amet, consectetur adipisicing elit. Fugiat magni quam recusandae dolores nihil sed molestias quaerat neque corporis iste, dolorem earum aut rem natus atque eius ad animi ut, vitae nemo cum, at incidunt! Dignissimos aperiam, dolor. Sed dicta adipisci reiciendis, eum fugiat dolorem asperiores a ut. Sit assumenda neque eius reprehenderit maxime deleniti voluptate, praesentium error asperiores ratione! Reiciendis cumque obcaecati sint sapiente cum, adipisci, libero dolorem mollitia itaque dolor natus necessitatibus in eaque facilis distinctio quisquam. Ullam debitis porro corrupti, tenetur, distinctio, sunt cum laudantium obcaecati sint, incidunt cupiditate </p>\n" +
    "	<p>laboriosam soluta architecto culpa aut facilis dolorem commodi! Non beatae delectus facilis quae omnis ipsam incidunt dolorum esse culpa vitae quibusdam minus doloribus consequatur eligendi voluptas facere, fuga reiciendis natus, blanditiis temporibus? Sint dignissimos quas ullam officia, ex vitae perspiciatis reprehenderit. Sit repudiandae asperiores corporis quidem sunt placeat accusantium ea earum libero eius debitis fugit itaque ex id sapiente perspiciatis, sint animi exercitationem iusto cumque quae. \n" +
    "\n" +
    "	<img src=\"./images/ucs/1mrB/DSC00122.JPG\">\n" +
    "\n" +
    "	Numquam totam illum atque molestiae tempore sed, recusandae minima exercitationem non quibusdam est amet Repellendus ut nemo velit, explicabo. Perspiciatis ratione soluta nihil nam ab voluptatem quos eos excepturi expedita molestiae accusamus delectus dolorum dicta, aspernatur fuga nulla quas, saepe, consectetur odio maiores esse cumque! Vel eaque, expedita doloribus, voluptates rerum molestiae nulla architecto dignissimos, esse porro voluptatibus omnis explicabo? Mollitia, provident sequi eligendi quia temporibus hic ex magnam aliquam nobis, earum omnis porro odit illo dolorum. Nemo esse officiis dolorum distinctio aperiam fugit optio eum non obcaecati, sapiente rem sit tempore facilis, saepe a eaque, totam neque. </p>\n" +
    "\n" +
    "	<p>Cupiditate consequatur natus, quidem magnam accusantium quae temporibus corporis repudiandae eaque necessitatibus unde ab quod molestiae, cum tenetur, sint distinctio dolor, numquam officiis reiciendis error! Aliquid illo in assumenda quos repellat! Nobis, voluptate nihil! Tempora, consequatur cumque assumenda non dolorem debitis nam qui ullam repudiandae repellat necessitatibus quia quidem dolore recusandae odio culpa minima et laborum, ad voluptatum excepturi tenetur velit? Ipsam unde vel atque harum sit nulla, aliquam dolores animi voluptatem dolorem quas, vitae doloribus velit earum distinctio nostrum porro ullam error facilis iure aperiam, saepe repellat et. Architecto eum commodi facere ut dolor, voluptate tempore voluptatem vel rerum. Nam hic velit numquam eos quo fugiat modi, sequi aliquam libero, quam qui ipsum doloremque dicta recusandae neque, deleniti ipsam laborum esse minima at dolorum laudantium? At magnam soluta quidem rerum labore, nihil maiores praesentium, eum quas ad rem officiis, laboriosam non placeat minus.</p>\n" +
    "	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum modi error qui minima nam quae incidunt provident minus et. Neque cumque, totam mollitia illum sed excepturi error expedita. Molestiae.</p>\n" +
    "	<hr>\n" +
    "</article>\n" +
    "\n" +
    "<section class=\"bigImage\">\n" +
    "	<img src=\"./images/backgrounds/librijks.jpg\" alt=\"\">\n" +
    "	<p>Im a real good caption of a picture</p>\n" +
    "</section>\n" +
    "\n" +
    "<article>\n" +
    "	<hr>\n" +
    "	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum modi error qui minima nam quae incidunt provident minus et. Neque cumque, totam mollitia illum sed excepturi error expedita. Molestiae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, cum, voluptas. Ipsum illum veniam, illo sint reprehenderit, aut tempore debitis voluptatum facere temporibus est minima dolore natus, pariatur sequi labore.</p>\n" +
    "	<p>Dolor sit amet, consectetur adipisicing elit. Fugiat magni quam recusandae dolores nihil sed molestias quaerat neque corporis iste, dolorem earum aut rem natus atque eius ad animi ut, vitae nemo cum, at incidunt! Dignissimos aperiam, dolor. Sed dicta adipisci reiciendis, eum fugiat dolorem asperiores a ut. Sit assumenda neque eius reprehenderit maxime deleniti voluptate, praesentium error asperiores ratione! Reiciendis cumque obcaecati sint sapiente cum, adipisci, libero dolorem mollitia itaque dolor natus necessitatibus in eaque facilis distinctio quisquam. Ullam debitis porro corrupti, tenetur, distinctio, sunt cum laudantium obcaecati sint, incidunt cupiditate </p>\n" +
    "	<p>laboriosam soluta architecto culpa aut facilis dolorem commodi! Non beatae delectus facilis quae omnis ipsam incidunt dolorum esse culpa vitae quibusdam minus doloribus consequatur eligendi voluptas facere, fuga reiciendis natus, blanditiis temporibus? Sint dignissimos quas ullam officia, ex vitae perspiciatis reprehenderit. Sit repudiandae asperiores corporis quidem sunt placeat accusantium ea earum libero eius debitis fugit itaque ex id sapiente perspiciatis, sint animi exercitationem iusto cumque quae. \n" +
    "\n" +
    "	<img src=\"./images/ucs/1mrB/DSC00129.JPG\">\n" +
    "\n" +
    "	Numquam totam illum atque molestiae tempore sed, recusandae minima exercitationem non quibusdam est amet Repellendus ut nemo velit, explicabo. Perspiciatis ratione soluta nihil nam ab voluptatem quos eos excepturi expedita molestiae accusamus delectus dolorum dicta, aspernatur fuga nulla quas, saepe, consectetur odio maiores esse cumque! Vel eaque, expedita doloribus, voluptates rerum molestiae nulla architecto dignissimos, esse porro voluptatibus omnis explicabo? Mollitia, provident sequi eligendi quia temporibus hic ex magnam aliquam nobis, earum omnis porro odit illo dolorum. Nemo esse officiis dolorum distinctio aperiam fugit optio eum non obcaecati, sapiente rem sit tempore facilis, saepe a eaque, totam neque. </p>\n" +
    "\n" +
    "	<p>Cupiditate consequatur natus, quidem magnam accusantium quae temporibus corporis repudiandae eaque necessitatibus unde ab quod molestiae, cum tenetur, sint distinctio dolor, numquam officiis reiciendis error! Aliquid illo in assumenda quos repellat! Nobis, voluptate nihil! Tempora, consequatur cumque assumenda non dolorem debitis nam qui ullam repudiandae repellat necessitatibus quia quidem dolore recusandae odio culpa minima et laborum, ad voluptatum excepturi tenetur velit? Ipsam unde vel atque harum sit nulla, aliquam dolores animi voluptatem dolorem quas, vitae doloribus velit earum distinctio nostrum porro ullam error facilis iure aperiam, saepe repellat et. Architecto eum commodi facere ut dolor, voluptate tempore voluptatem vel rerum. Nam hic velit numquam eos quo fugiat modi, sequi aliquam libero, quam qui ipsum doloremque dicta recusandae neque, deleniti ipsam laborum esse minima at dolorum laudantium? At magnam soluta quidem rerum labore, nihil maiores praesentium, eum quas ad rem officiis, laboriosam non placeat minus.</p>\n" +
    "	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum modi error qui minima nam quae incidunt provident minus et. Neque cumque, totam mollitia illum sed excepturi error expedita. Molestiae.</p>\n" +
    "	<hr>\n" +
    "</article>\n" +
    "\n" +
    "<section class=\"blackTransition small left\">\n" +
    "	<hr>\n" +
    "	<p> Written by: Johanna Barnbeck</p>\n" +
    "	<p> Supervised by: Jan Hein Hoogstad and Shailoh Philips </p>\n" +
    "	<p> Technical: Robert-Jan Korteschiel</p>\n" +
    "	<p> With thanks for: ... ...</p>\n" +
    "	<br>\n" +
    "	<p> Part of the study: <a href=\"#home\">\"Augementing Masterpieces\"</a></p>\n" +
    "	<hr>\n" +
    "</section>\n" +
    "");
}]);

angular.module("templates/experiments.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/experiments.html",
    "<section>\n" +
    "	<section class=\"fullScreenBox fbg4 pos1\">\n" +
    "	</section>\n" +
    "	<section class=\"fullScreenBox fbg2 pos2\">\n" +
    "	</section>\n" +
    "	<section class=\"fullScreenBox fbg3 pos3\">\n" +
    "	</section>\n" +
    "</section>\n" +
    "<section class=\"centerSite\">\n" +
    "	<section class=\"fullScreenBox fbg2 pos4\">\n" +
    "	</section>\n" +
    "	<section class=\"fullScreenBox fbg1 pos5\">\n" +
    "\n" +
    "		<h1>Augmenting Masterpieces</h1>\n" +
    "\n" +
    "		<p class=\"thought t1\"> What can I do? </p>\n" +
    "		<p class=\"thought t2\"> What do I see? </p>\n" +
    "		<p class=\"thought t3\"> What do they see? </p>\n" +
    "\n" +
    "\n" +
    "	</section>\n" +
    "	<section class=\"fullScreenBox fbg2 pos6\">\n" +
    "	</section>\n" +
    "</section>\n" +
    "<section>\n" +
    "	<section class=\"fullScreenBox fbg4 pos7\">\n" +
    "	</section>\n" +
    "	<section class=\"fullScreenBox fbg3 pos8\">\n" +
    "		<video src=\"../video/big_buck_bunny.webm\" controls class=\"vid\"></video>\n" +
    "		<div class=\"vidOverlay\"></div>\n" +
    "	</section>\n" +
    "	<section class=\"fullScreenBox fbg4 pos9\">\n" +
    "	</section>\n" +
    "</section>\n" +
    "\n" +
    "");
}]);

angular.module("templates/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/home.html",
    "<section class=\"homeContainer\">\n" +
    "	<section class=\"homeHeader\">\n" +
    "		<div class=\"title\">\n" +
    "			<h1>// Augmenting Masterpieces //</h1>\n" +
    "			<h2>Humans, The Museum and Technology</h2>\n" +
    "		</div>\n" +
    "		<div class=\"whiteTransition\"></div>\n" +
    "	</section>\n" +
    "	<section class=\"homeVideo\">\n" +
    "		<video src=\"../video/big_buck_bunny.webm\" controls class=\"introVid\"></video>\n" +
    "	</section>\n" +
    "	<section class=\"homeButtonSection\">\n" +
    "		<div class=\"whiteTransition inverse\"></div>\n" +
    "		<div class=\"buttonDiv\"> \n" +
    "			<a href=\"#case-study\" class=\"button\"> // Case Study //</a>\n" +
    "		</div>\n" +
    "		<div class=\"whiteTransition\"></div>\n" +
    "	</section>\n" +
    "	<section class=\"homeMethods\">\n" +
    "		<div class=\"methodsTop\">\n" +
    "			<div class=\"methodsMainText clearfix\">\n" +
    "				<h4> // Methods // </h4>\n" +
    "				<p>Im a big chuck of text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint adipisci nulla minima, tempore perspiciatis deleniti provident omnis dolores molestiae modi fugit, rem earum ipsa laudantium ullam quo consectetur ut doloribus!</p> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex consectetur blanditiis facilis, eius officiis illo. Beatae culpa suscipit soluta ducimus accusamus, porro ipsum dolore cumque animi fugit accusantium, minima, quod laboriosam. Molestias ea assumenda aliquid beatae neque excepturi dolore placeat eaque in doloremque sit eum culpa qui similique eius quia illum voluptas dolorum iure, alias facilis. Exercitationem hic distinctio alias eius doloribus necessitatibus nam repellat, debitis sunt. Consectetur sapiente, accusantium. Modi repellendus impedit veritatis nisi eos repudiandae pariatur exercitationem, quaerat fugit harum totam, quasi officiis consequatur ratione fugiat ab placeat? Dolorum, vero similique quae numquam. Laboriosam et rem tempora cupiditate autem quidem exercitationem fugiat porro reiciendis animi dolorum nisi eligendi amet voluptas, excepturi assumenda quisquam harum. Consequuntur rerum ipsum quos voluptatibus officiis cum!</p>\n" +
    "			</div>\n" +
    "			<div class=\"furtherReading clearfix\">\n" +
    "				<a href=\"\" class=\"button\"> // Further Reading // </a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "		<div class=\"textBlock\">\n" +
    "			<div class=\"diagBorder\"></div>\n" +
    "			<div class=\"textItself\">\n" +
    "				<h4>// Design Thinking //</h4>\n" +
    "				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ipsam labore tempora provident consequatur? Voluptatum rem fugiat veritatis temporibus autem recusandae, maiores, nihil eveniet provident maxime error consectetur assumenda qui expedita debitis, optio odit ullam explicabo cumque beatae officia a, ducimus accusamus! Totam eum, debitis, praesentium numquam, laboriosam voluptatem aperiam deleniti, ipsum dolore optio incidunt! Porro error quas expedita at, mollitia officia sed impedit illum non, voluptates deserunt fuga aspernatur dolorem a numquam, odit eius eum rerum alias eos! Nemo, in, ab explicabo nobis quam praesentium nihil velit vel ad quia placeat qui, perferendis minima! Nisi harum voluptates numquam consectetur. Obcaecati, dolorem maxime libero, autem illo aliquam ducimus culpa debitis quia ratione optio iure ipsa. Itaque, molestiae asperiores ducimus. Mollitia necessitatibus dolores adipisci incidunt quaerat assumenda minima eaque rem neque, aliquid pariatur culpa, dolore, iure nobis eius ipsum accusantium repellat doloremque reiciendis excepturi voluptates maxime. Beatae aut magni rem repellat?</p>\n" +
    "			</div>\n" +
    "			<div class=\"diagBorderInverse\"></div>\n" +
    "		</div>\n" +
    "		<div class=\"textBlock\">\n" +
    "			<div class=\"diagBorder\"></div>\n" +
    "			<div class=\"textItself\">\n" +
    "				<h4>// Digital Humanities 	//</h4>\n" +
    "				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ipsam labore tempora provident consequatur? Voluptatum rem fugiat veritatis temporibus autem recusandae, maiores, nihil eveniet provident maxime error consectetur assumenda qui expedita debitis, optio odit ullam explicabo cumque beatae officia a, ducimus accusamus! Totam eum, debitis, praesentium numquam, laboriosam voluptatem aperiam deleniti, ipsum dolore optio incidunt! Porro error quas expedita at, mollitia officia sed impedit illum non, voluptates deserunt fuga aspernatur dolorem a numquam, odit eius eum rerum alias eos! Nemo, in, ab explicabo nobis quam praesentium nihil velit vel ad quia placeat qui, perferendis minima! Nisi harum voluptates numquam consectetur. Obcaecati, dolorem maxime libero, autem illo aliquam ducimus culpa debitis quia ratione optio iure ipsa. Itaque, molestiae asperiores ducimus. Mollitia necessitatibus dolores adipisci incidunt quaerat assumenda minima eaque rem neque, aliquid pariatur culpa, dolore, iure nobis eius ipsum accusantium repellat doloremque reiciendis excepturi voluptates maxime. Beatae aut magni rem repellat?</p>\n" +
    "			</div>\n" +
    "			<div class=\"diagBorderInverse\"></div>\n" +
    "		</div>\n" +
    "		<div class=\"textBlock\">\n" +
    "			<div class=\"textItself\">\n" +
    "				<h4>// Artistic Research //</h4>\n" +
    "				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ipsam labore tempora provident consequatur? Voluptatum rem fugiat veritatis temporibus autem recusandae, maiores, nihil eveniet provident maxime error consectetur assumenda qui expedita debitis, optio odit ullam explicabo cumque beatae officia a, ducimus accusamus! Totam eum, debitis, praesentium numquam, laboriosam voluptatem aperiam deleniti, ipsum dolore optio incidunt! Porro error quas expedita at, mollitia officia sed impedit illum non, voluptates deserunt fuga aspernatur dolorem a numquam, odit eius eum rerum alias eos! Nemo, in, ab explicabo nobis quam praesentium nihil velit vel ad quia placeat qui, perferendis minima! Nisi harum voluptates numquam consectetur. Obcaecati, dolorem maxime libero, autem illo aliquam ducimus culpa debitis quia ratione optio iure ipsa. Itaque, molestiae asperiores ducimus. Mollitia necessitatibus dolores adipisci incidunt quaerat assumenda minima eaque rem neque, aliquid pariatur culpa, dolore, iure nobis eius ipsum accusantium repellat doloremque reiciendis excepturi voluptates maxime. Beatae aut magni rem repellat?</p>\n" +
    "			</div>\n" +
    "		</div>		\n" +
    "	</section>\n" +
    "	<section class=\"homeButtonSection homePrototype\">\n" +
    "		<div class=\"whiteTransition inverse\"></div>\n" +
    "		<div class=\"buttonDiv\">\n" +
    "			<a href=\"\" class=\"button\">// Prototypes // </a>\n" +
    "			<p> (not yet available) </p>\n" +
    "		</div>\n" +
    "		<div class=\"whiteTransition\"></div>\n" +
    "	</section>\n" +
    "	<section class=\"homeAbout\">\n" +
    "		<div class=\"people clearfix\">\n" +
    "			<h4>// People //</h4>\n" +
    "			<div class=\"person clearfix\">\n" +
    "				<img src=\"\" alt=\"\">\n" +
    "				<p>Johanna Barnbeck</p>\n" +
    "			</div>\n" +
    "			<div class=\"person clearfix\">\n" +
    "				<img src=\"\" alt=\"\">\n" +
    "				<p>Jan Hein Hoogstad</p>\n" +
    "			</div>\n" +
    "			<div class=\"person clearfix\">\n" +
    "				<img src=\"\" alt=\"\">\n" +
    "				<p>Shailo Philips</p>\n" +
    "			</div>\n" +
    "			<div class=\"person clearfix\">\n" +
    "				<img src=\"\" alt=\"\">\n" +
    "				<p>Patty Jansen</p>\n" +
    "			</div>\n" +
    "			<div class=\"person clearfix\">\n" +
    "				<img src=\"\" alt=\"\">\n" +
    "				<p>Robert-Jan Korteschiel</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"timeline\">\n" +
    "			<h4>// Timeline //</h3>\n" +
    "			<div class=\"theLine\"></div>\n" +
    "			<div class=\"left\">\n" +
    "				<div class=\"singleTimeItem date\"><h4>2014</h4></div>\n" +
    "				<div class=\"singleTimeItem\">\n" +
    "					<div class=\"timePoint\"></div>\n" +
    "					<p>Pitch</p>\n" +
    "				</div>\n" +
    "				<div class=\"singleTimeItem\">\n" +
    "					<div class=\"timePoint\"></div>\n" +
    "					<p>Observe</p>\n" +
    "				</div>\n" +
    "				<div class=\"singleTimeItem\">\n" +
    "					<div class=\"timePoint\"></div>\n" +
    "					<p>Ideate</p>\n" +
    "				</div>\n" +
    "				<div class=\"singleTimeItem\">\n" +
    "					<div class=\"timePoint\"></div>\n" +
    "					<p>Prototype</p>\n" +
    "				</div>\n" +
    "				<div class=\"singleTimeItem\">\n" +
    "					<div class=\"timePoint\"></div>\n" +
    "					<p>Wrapup</p>\n" +
    "				</div>\n" +
    "				<div class=\"singleTimeItem date\"><h4>2015</h4></div>\n" +
    "			</div>\n" +
    "			<div class=\"right\"> \n" +
    "				<h4>// Observe //</h4>\n" +
    "				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt esse fuga ipsam, pariatur iusto consectetur, blanditiis dolor distinctio, mollitia facilis totam. Laboriosam labore, cumque, repudiandae voluptate repellat illum id, quaerat eveniet doloribus quis suscipit, quia sapiente quo officiis ipsa. Error delectus veritatis fuga pariatur soluta assumenda ipsum, dicta ex ab, quis facilis totam. Voluptates, vel vitae nostrum accusantium molestias provident impedit enim esse quaerat omnis culpa sit incidunt beatae dolor assumenda tempora laudantium magni, eum, doloremque illum similique fugiat iusto veniam corrupti! Enim veniam ea natus nam rerum ad temporibus debitis sapiente! Perspiciatis, sunt libero amet veniam, eos quis quidem.</p> \n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "	</section>\n" +
    "	<section class=\"homeConnect\">\n" +
    "		<div class=\"whiteTransition inverse\"></div>\n" +
    "		<div class=\"connectMain\">\n" +
    "			<div class=\"title\">\n" +
    "				<h1>//&nbsp;Augmenting Masterpieces&nbsp;//</h1>\n" +
    "				<h2>Humans, The Museum and Technology</h2>\n" +
    "			</div>\n" +
    "			<div class=\"waysToConnectContainer\">\n" +
    "				<div class=\"connectBoxes\">\n" +
    "					<h4>// Follow us! //</h4>\n" +
    "					<ul class=\"socialIcon clearfix\">\n" +
    "						<li class=\"facebook\"></li>\n" +
    "						<li class=\"twitter\"></li>\n" +
    "						<li class=\"google\"></li>\n" +
    "						<li class=\"rss\"></li>\n" +
    "					</ul>\n" +
    "					<h4> // Mailing list // </h4>\n" +
    "					<form>\n" +
    "						<label>\n" +
    "							<span> Name: </span><input type=\"text\" name=\"name\">\n" +
    "						</label><br>\n" +
    "						<label>\n" +
    "							<span> E-mail: </span><input type=\"email\" name=\"user_email\">\n" +
    "						</label>\n" +
    "					</form>\n" +
    "					<p class=\"smalltext\">(Low frequency)</p>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "</section>\n" +
    "\n" +
    "");
}]);

angular.module("templates/prototype.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/prototype.html",
    "<section>\n" +
    "	<p> Im the Prototype Template </p>\n" +
    " <!-- ui-sref-active=\"active\" -->\n" +
    "</section>");
}]);
