angular.module('templates-cth', ['templates/caseStudy.html', 'templates/experiments.html', 'templates/process.html', 'templates/prototype.html']);

angular.module("templates/caseStudy.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/caseStudy.html",
    "<section class=\"caseTop\">\n" +
    "	<div class=\"designDiv\"></div>\n" +
    "	<div class=\"mainDiv\">\n" +
    "		<hr>\n" +
    "		<h1> User Camera Studies </h1>\n" +
    "		<hr>\n" +
    "	</div>\n" +
    "	<div class=\"designDiv2\"></div>\n" +
    "</section>\n" +
    "<section class=\"grayTransition small\">\n" +
    "	<hr>\n" +
    "	<p class=\"underline\"> A collaboration between:</p>\n" +
    "	<img src=\"./images/uvalogowhite.png\">\n" +
    "	<img src=\"./images/rijkswhite.png\">\n" +
    "	<p>Jan Hein Hoogstad - Johanna Barnbeck - Shailoh Philips</p>\n" +
    "	<hr>\n" +
    "</section>\n" +
    "<article >\n" +
    "	<hr>\n" +
    "	<h1 > The intro text </h1>\n" +
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
    "			<img src=\"./images/male-icon.png\" alt=\"\">\n" +
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
    "					<h1>42</h1>\n" +
    "					<img src=\"./images/icons/camerawhite.png\" alt=\"\">\n" +
    "				</div>\n" +
    "				<div class=\"threeCatogoryPicture clearfix\">\n" +
    "					<p>Theme</p>\n" +
    "					<div class=\"paintings clearfix\">\n" +
    "						<img class=\"clearfix\" src=\"./images/icons/picturewhite.png\" alt=\"\">\n" +
    "						<div class=\"statBar bar1 clearfix\"></div>\n" +
    "						<img class=\"clearfix\" src=\"./images/icons/sculpturewhite.png\" alt=\"\">\n" +
    "					</div>\n" +
    "					<div class=\"building clearfix\">\n" +
    "						<img class=\"clearfix\" src=\"./images/icons/buildingwhite.svg\" alt=\"\">\n" +
    "						<div class=\"statBar bar2 clearfix\"></div>\n" +
    "						<img class=\"clearfix\" src=\"./images/icons/brandblusserwhite.png\" alt=\"\">\n" +
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
    "					<img src=\"./images/clockwhite.png\" alt=\"\" class=\"clearfix\">\n" +
    "					<div class=\"timeBar clearfix\">\n" +
    "						<p>90 min</p>\n" +
    "					</div>\n" +
    "				</div>	\n" +
    "				<div class=\"time clearfix\">\n" +
    "					<p>Interview:</p>\n" +
    "					<img src=\"./images/clockwhite.png\" alt=\"\" class=\"clearfix\">\n" +
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
    "<section class=\"singleCaseBody\">\n" +
    "	<h1>\"Interesting Quote about something\"</h1>\n" +
    "	<div class=\"conversation clearfix\">\n" +
    "		<hr>\n" +
    "		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum modi error qui minima nam quae incidunt provident minus et. Neque cumque, totam mollitia illum sed excepturi error expedita. Molestiae.</p>\n" +
    "		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum modi error qui minima nam quae incidunt provident minus et. Neque cumque, totam mollitia illum sed excepturi error expedita. Molestiae.</p>\n" +
    "		<hr>\n" +
    "	</div>\n" +
    "	<div id=\"owl-example\" class=\"owl-carousel owlGallery\">\n" +
    "		<!-- <div><img src=\"./images/ucs/1mrB/DSC00112.JPG\"></div>\n" +
    "		<div><img src=\"./images/ucs/1mrB/DSC00117.JPG\"></div>\n" +
    "		<div><img src=\"./images/ucs/1mrB/DSC00120.JPG\"></div>\n" +
    "		<div><img src=\"./images/ucs/1mrB/DSC00122.JPG\"></div>\n" +
    "		<div><img src=\"./images/ucs/1mrB/DSC00127.JPG\"></div>\n" +
    "		<div><img src=\"./images/ucs/1mrB/DSC00129.JPG\"></div>\n" +
    "		<div><img src=\"./images/ucs/1mrB/DSC00137.JPG\"></div>\n" +
    "		<div><img src=\"./images/ucs/1mrB/DSC00141.JPG\"></div>\n" +
    "		<div><img src=\"./images/ucs/1mrB/DSC00148.JPG\"></div> -->\n" +
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
    "	<h1> The main text </h1>\n" +
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
    "	<img src=\"./images/librijks.jpg\" alt=\"\">\n" +
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
    "<section class=\"grayTransition small left\">\n" +
    "	<hr>\n" +
    "	<p class=\"credits\"> Written by: Johanna Barnbeck</p>\n" +
    "	<p class=\"credits\"> Supervised by: Jan Hein Hoogstad and Shailoh Philips </p>\n" +
    "	<p class=\"credits\"> Technical: Robert-Jan Korteschiel</p>\n" +
    "	<p class=\"credits\"> With thanks for: ... ...</p>\n" +
    "	<br>\n" +
    "	<p class=\"credits\"> Part of the study: <a href=\"\">\"Augementing Masterpieces\"</a></p>\n" +
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

angular.module("templates/process.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/process.html",
    "<section class=\"homeContainer\">\n" +
    "	<section class=\"homeHeader\" data-stellar-ratio=\"0\">\n" +
    "		<div class=\"title\">\n" +
    "			<h1>|||  Augmenting Masterpieces  |||</h1>\n" +
    "			<p>|||  Humans, The Museum and Technology  |||</p>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "	<section class=\"homeVideo\">\n" +
    "		<video src=\"../video/big_buck_bunny.webm\" controls class=\"introVid\"></video>\n" +
    "	</section>\n" +
    "	<section class=\"homeCaseStudy\">\n" +
    "		<button>Case Study</button>\n" +
    "	</section>\n" +
    "	<section class=\"homeMethods\">\n" +
    "		<h1>Methods</h1>\n" +
    "		<p>Im a big chuck of text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint adipisci nulla minima, tempore perspiciatis deleniti provident omnis dolores molestiae modi fugit, rem earum ipsa laudantium ullam quo consectetur ut doloribus!</p> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex consectetur blanditiis facilis, eius officiis illo. Beatae culpa suscipit soluta ducimus accusamus, porro ipsum dolore cumque animi fugit accusantium, minima, quod laboriosam. Molestias ea assumenda aliquid beatae neque excepturi dolore placeat eaque in doloremque sit eum culpa qui similique eius quia illum voluptas dolorum iure, alias facilis. Exercitationem hic distinctio alias eius doloribus necessitatibus nam repellat, debitis sunt. Consectetur sapiente, accusantium. Modi repellendus impedit veritatis nisi eos repudiandae pariatur exercitationem, quaerat fugit harum totam, quasi officiis consequatur ratione fugiat ab placeat? Dolorum, vero similique quae numquam. Laboriosam et rem tempora cupiditate autem quidem exercitationem fugiat porro reiciendis animi dolorum nisi eligendi amet voluptas, excepturi assumenda quisquam harum. Consequuntur rerum ipsum quos voluptatibus officiis cum! Eveniet eligendi, excepturi saepe, atque doloremque veniam temporibus consequatur ex? Quos atque ad accusamus beatae, minima architecto blanditiis laudantium amet omnis voluptas minus ullam sapiente, eveniet praesentium ea unde expedita, cupiditate rem velit placeat distinctio animi consectetur nesciunt ipsam. Facere dicta consequatur adipisci error ipsum repudiandae, eos cupiditate nam ut fugiat, temporibus natus exercitationem asperiores at, culpa ullam maxime facilis aliquid laudantium numquam et. Quo nam excepturi adipisci, ipsa vero reiciendis totam, sapiente, molestias architecto aliquid nostrum.</p>		\n" +
    "	</section>\n" +
    "	\n" +
    "	<section class=\"homePrototypes\"></section>\n" +
    "	<section class=\"homePeople\"></section>\n" +
    "	<section class=\"homeTimeline\"></section>\n" +
    "	<section class=\"homeConnect\"></section>\n" +
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
