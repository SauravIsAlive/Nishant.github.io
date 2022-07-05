var home = document.querySelector('.home')
var about = document.querySelector('.about')
var html = document.querySelector('body')
var afterHeader = document.querySelector('.afterHeader')
about.addEventListener('click',()=>{
    afterHeader.innerHTML = `<h1 style="color:gold;" class="aboutMe">About</h1>`+
    `<section data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"
    data-aos-delay="150" class="text-gray-600 body-font" style="user-select: auto;">
        <div class="container px-5 py-24 mx-auto flex flex-wrap" style="user-select: auto;">
            <div class="flex flex-wrap w-full" style="user-select: auto;">
                <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6" style="user-select: auto;">
                    <div class="flex relative pb-12" style="user-select: auto;">
                        <div class="flex-shrink-0 w-10 h-10 rounded-full border-2 border-green bg-white-500 inline-flex items-center justify-center text-gold relative z-10"
                            style="user-select: auto;">
                            <i class="ph-paint-brush-bold" style="color:gold"></i>
                        </div>
                        <div class="flex-grow pl-4" style="user-select: auto;">
                            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"
                                style="color: #44ff53">Colors</h2>
                            <p class="grey-text leading-relaxed" style="user-select: auto;">I love colors.I grew up
                                painting and sketching be it landscapes or sketches .My Dad was my mentor he was
                                extremely good with colors,and I inherited it.I love all the colors of the Rainbow. They
                                bring sparkle in my eyes.</p>
                        </div>
                    </div>
                    <div class="flex relative pb-12" style="user-select: auto;">
                        <div class="flex-shrink-0 w-10 h-10 rounded-full border-2 bg-white-500 inline-flex items-center justify-center text-white relative z-10"
                            style="user-select: auto;">
                            <i class="ph-presentation-chart-bold" style="color: gold;"></i>
                        </div>
                        <div class="flex-grow pl-4" style="user-select: auto;">
                            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"
                                style="color: #ff936c;">Creativity</h2>
                            <p class="grey-text leading-relaxed" style="user-select: auto;">Creativity is just
                                connecting things, this is what I love to do with arts </p>
                        </div>
                    </div>
                    <div class="flex relative pb-12" style="user-select: auto;">
                        <div class="flex-shrink-0 w-10 h-10 rounded-full border-2 bg-white-500 inline-flex items-center justify-center text-white relative z-10"
                            style="user-select: auto;">
                            <i class="ph-pencil-bold" style="color: gold"></i>
                        </div>
                        <div class="flex-grow pl-4" style="user-select: auto;">
                            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"
                                style="color: grey;">Sketch</h2>
                            <p class="grey-text leading-relaxed" style="user-select: auto;">Through sketch I can express
                                various emotions, train of thoughts, and collective feelings. Sketching expands the
                                option of an assorted communication field. Through Sketch I can express what I feel.</p>
                        </div>
                    </div>
                    <div class="flex relative pb-12" style="user-select: auto;">
                        <div class="flex-shrink-0 w-10 h-10 rounded-full border-2 bg-white-500 inline-flex items-center justify-center text-white relative z-10"
                        style="user-select: auto;">
                            <i class="ph-heart-bold" style="color: gold"></i>
                        </div>
                        <div class="flex-grow pl-4" style="user-select: auto;">
                          <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"  style="color: rgb(74, 111, 255)">Passion</h2>
                          <p class="leading-relaxed"> For me, Drawing and
                            Painting is something that i can't live without. It's my LIFE</p>
                        </div>
                      </div>
                      <div class="flex relative" style="user-select: auto;">
                        <div class="flex-shrink-0 w-10 h-10 rounded-full border-2 bg-white-500 inline-flex items-center justify-center text-white relative z-10"
                            style="user-select: auto;">
                            <i class="ph-sparkle-bold" style="color: gold"></i>
                        </div>
                        <div class="flex-grow pl-4" style="user-select: auto;">
                          <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"  style="color: gold;">Clean</h2>
                          <p class="leading-relaxed" style="user-select: auto;">I love the gratification
                            of clean arts; when you clean an clean art, it immediately gives pleasure.</p>
                        </div>
                      </div>
                    </div>
                    <img class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="images/arstis.jpeg" alt="step" style="user-select: auto;">
                  </div>
                </div>
    </section>`+

   `<footer class="text-gray-600 body-font" style="user-select: auto;">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col" style="user-select: auto;">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10" style="user-select: auto;">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" style="user-select: auto;">
        <span class="ml-3 text-xl" style="user-select: auto;"></span>
      </a>
      <p class="mt-2 text-sm text-gray-500" style="user-select: auto;"></p>
    </div>
    <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first" style="user-select: auto;">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4" style="user-select: auto;">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" style="user-select: auto;"></h2>
        <nav class="list-none mb-10" style="user-select: auto;">
          <li style="user-select: auto;">
            <a class="text-gray-600 hover:text-gray-800" style="user-select: auto;"></a>
          </li>
          <li style="user-select: auto;">
            <a class="text-gray-600 hover:text-gray-800" style="user-select: auto;"></a>
          </li>
          <li style="user-select: auto;">
            <a class="text-gray-600 hover:text-gray-800" style="user-select: auto;"></a>
          </li>
          <li style="user-select: auto;">
            <a class="text-gray-600 hover:text-gray-800" style="user-select: auto;"></a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4" style="user-select: auto;">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" style="user-select: auto;"></h2>
        <nav class="list-none mb-10" style="user-select: auto;">
          <li style="user-select: auto;">
            <a class="text-gray-600 hover:text-gray-800" style="user-select: auto;"></a>
          </li>
          <li style="user-select: auto;">
            <a class="text-gray-600 hover:text-gray-800" style="user-select: auto;"></a>
          </li>
          <li style="user-select: auto;">
            <a class="text-gray-600 hover:text-gray-800" style="user-select: auto;"></a>
          </li>
          <li style="user-select: auto;">
            <a class="text-gray-600 hover:text-gray-800" style="user-select: auto;"></a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4" style="user-select: auto;">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" style="user-select: auto;"></h2>
        <nav class="list-none mb-10" style="user-select: auto;">
          <li style="user-select: auto;">
            <a class="text-gray-600 hover:text-gray-800" style="user-select: auto;"></a>
          </li>
          <li style="user-select: auto;">
            <a class="text-gray-600 hover:text-gray-800" style="user-select: auto;"></a>
          </li>
          <li style="user-select: auto;">
            <a class="text-gray-600 hover:text-gray-800" style="user-select: auto;"></a>
          </li>
          <li style="user-select: auto;">
            <a class="text-gray-600 hover:text-gray-800" style="user-select: auto;"></a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4" style="user-select: auto;">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" style="user-select: auto;"></h2>
        <nav class="list-none mb-10" style="user-select: auto;">
          <li style="user-select: auto;">
            <a class="text-gray-600 hover:text-gray-800" style="user-select: auto;"></a>
          </li>
          <li style="user-select: auto;">
            <a class="text-gray-600 hover:text-gray-800" style="user-select: auto;"></a>
          </li>
          <li style="user-select: auto;">
            <a class="text-gray-600 hover:text-gray-800" style="user-select: auto;"></a>
          </li>
          <li style="user-select: auto;">
            <a class="text-gray-600 hover:text-gray-800" style="user-select: auto;"></a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-gray-100" style="user-select: auto;">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row" style="user-select: auto;">
      <p class="text-gold-500 text-sm text-center sm:text-left"color:gold; style="user-select: auto;">© Nishant Meena —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank" style="user-select: auto;"></a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start" style="user-select: auto;">
        <a class="ml-3 text-gray-500" href="https://instagram.com/nishantmeena149" style="user-select: auto;">
          <svg fill="none" stroke="gold" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24" style="user-select: auto;">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" style="user-select: auto;"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" style="user-select: auto;"></path>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>`
})
home.addEventListener('click',()=>{
    afterHeader.innerHTML =  `<section data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"
    data-aos-delay="150" class="text-gray-600 body-font overflow-hidden" style="user-select: auto;">
    <div class="container px-5 py-24 mx-auto" style="user-select: auto;">
      <div class="lg:w-4/5 mx-auto flex flex-wrap" style="user-select: auto;">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="images/color1.jpg" style="user-select: auto;">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="user-select: auto;">
          <h2 class="text-sm title-font text-gray-500 tracking-widest" style="user-select: auto;">NISHANT</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" style="user-select: auto;">Saraswati Maa</h1>
          <div class="flex mb-4" style="user-select: auto;">
          </div>
          <p class="leading-relaxed" style="user-select: auto;">Saraswati is a Hindu goddess who represents education,
            creativity, and music. The name Saraswati stems from the Sanskrit root "saras," which means "that which is
            fluid." Maa Saraswati is known to bring order out of chaos and has a calming and centering personality.</p>
          <div class="flex" style="user-select: auto;">
            <button
              class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
              style="user-select: auto;"><a href="images/color1.jpg" download>Download</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>`+
  `<hr>`+
  `<section data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"
    data-aos-delay="150" class="text-gray-600 body-font overflow-hidden" style="user-select: auto;">
    <div class="container px-5 py-24 mx-auto" style="user-select: auto;">
      <div class="lg:w-4/5 mx-auto flex flex-wrap" style="user-select: auto;">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="images/color2.jpg" style="user-select: auto;">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="user-select: auto;">
          <h2 class="text-sm title-font text-gray-500 tracking-widest" style="user-select: auto;">NISHANT</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" style="user-select: auto;">Red Model Girl</h1>
          <div class="flex mb-4" style="user-select: auto;">
          </div>
          <p class="leading-relaxed" style="user-select: auto;">A beautiful Red Model girl with an amazing circular background, beautifully created with by an amazing artist Nishant.<br><br>
            Art is never finished, only abandoned. There is no must in art because art is free. To my mind a picture should be something pleasant, cheerful and pretty. There are too many unpleasant things in life as it is, without creating still more of them.</p>
          <div class="flex" style="user-select: auto;">
            <button
              class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
              style="user-select: auto;"><a href="images/color2.jpg" download>Download</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>`+
 ` <hr>`+
 ` <section data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"
    data-aos-delay="150" class="text-gray-600 body-font overflow-hidden" style="user-select: auto;">
    <div class="container px-5 py-24 mx-auto" style="user-select: auto;">
      <div class="lg:w-4/5 mx-auto flex flex-wrap" style="user-select: auto;">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="images/color3.jpg" style="user-select: auto;">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="user-select: auto;">
          <h2 class="text-sm title-font text-gray-500 tracking-widest" style="user-select: auto;">NISHANT</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" style="user-select: auto;">Lord Ganesha</h1>
          <div class="flex mb-4" style="user-select: auto;">
          </div>
          <p class="leading-relaxed" style="user-select: auto;">This a pen art of Lord Ganesha made by Nishant, Ganesha is thus considered the master of intellect and wisdom. He is depicted as a big-bellied, yellow or red god with four arms and the head of a one- tusked elephant, riding on, or attended to by, a mouse. He is frequently represented sitting down, with one leg raised in the air and bent over the other.
            <br><br>
            Lord Ganesh is the second and young son of Lord Shiva and Goddess Parvati, he is also known as “Pratham Pujya” as he is the first god to be worshipped. Lord Ganesh also referred as “Vighna Vinashak” i.e. he is the one who destroys all the evils, obstacles and trouble from his devotee's life</p>
          <div class="flex" style="user-select: auto;">
            <button
              class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
              style="user-select: auto;"><a href="images/color3.jpg" download>Download</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>`+
 ` <hr>`+
  `<section data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"
    data-aos-delay="150" class="text-gray-600 body-font overflow-hidden" style="user-select: auto;">
    <div class="container px-5 py-24 mx-auto" style="user-select: auto;">
      <div class="lg:w-4/5 mx-auto flex flex-wrap" style="user-select: auto;">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="images/color5.jpg" style="user-select: auto;">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="user-select: auto;">
          <h2 class="text-sm title-font text-gray-500 tracking-widest" style="user-select: auto;">NISHANT</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" style="user-select: auto;">Paper Rangoli</h1>
          <div class="flex mb-4" style="user-select: auto;">
          </div>
          <p class="leading-relaxed" style="user-select: auto;">am, and PongalTraditionally, Rangoli is an art of decoration drawn on the floor or the entrances of homes. It is thought to bring good luck, prosperity on the house and in the family, and to welcome guests. Some mothers in India do this activity every morning, or on a special festive occasion like Diwali, On.
          <br><br>
          Diwali is celebrated, primarily to herald the coming of the Goddess Lakshmi. Prayers are offered to her, asking for her blessings in the form of wealth. As such, a Rangoli design is created at the entrance of the house, not only to welcome the guests that visit, but also the Goddess herself.
        </p>
          <div class="flex" style="user-select: auto;">
            <button
              class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
              style="user-select: auto;"><a href="images/color5.jpg" download>Download</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>`+
  `<hr>`+
 ` <section data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"
    data-aos-delay="150" class="text-gray-600 body-font overflow-hidden" style="user-select: auto;">
    <div class="container px-5 py-24 mx-auto" style="user-select: auto;">
      <div class="lg:w-4/5 mx-auto flex flex-wrap" style="user-select: auto;">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="images/color6.jpg" style="user-select: auto;">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="user-select: auto;">
          <h2 class="text-sm title-font text-gray-500 tracking-widest" style="user-select: auto;">NISHANT</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" style="user-select: auto;">Flute Krishna</h1>
          <div class="flex mb-4" style="user-select: auto;">
          </div>
          <p class="leading-relaxed" style="user-select: auto;">The bansuri is revered as Lord Krishna's divine instrument and is often associated with Krishna's Rasa lila dance. These legends sometimes use alternate names for this wind instrument, such as the murali.
          <br><br>
          Krishna is the ideal of divine love, the God of love. And the divine love expresses itself by entering into man and filling his whole being. Therefore the flute is the human heart, and a heart which is made hollow will become a flute for the God of love to play upon</p>
          <div class="flex" style="user-select: auto;">
            <button
              class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
              style="user-select: auto;"><a href="images/color6.jpg" download>Download</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>`+
 ` <hr>`+
 ` <section data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"
    data-aos-delay="150" class="text-gray-600 body-font overflow-hidden" style="user-select: auto;">
    <div class="container px-5 py-24 mx-auto" style="user-select: auto;">
      <div class="lg:w-4/5 mx-auto flex flex-wrap" style="user-select: auto;">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="images/color7.jpg" style="user-select: auto;">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="user-select: auto;">
          <h2 class="text-sm title-font text-gray-500 tracking-widest" style="user-select: auto;">NISHANT</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" style="user-select: auto;">Saree Madam</h1>
          <div class="flex mb-4" style="user-select: auto;">
          </div>
          <p class="leading-relaxed" style="user-select: auto;">Indian goddesses called Devi's are portrayed as wearing bright silk sarees. The color of the saree represents beliefs. Yellow saree is believed to be auspicious, red symbolizes courage, white is for purity. The traditional significance comes from the embedded details of the saree.
          <br><br>
          Drape it in modern style or traditional; it will always be an attention grabber, not to forget all the drools you get! Every girl would like to show off her curves. Undoubtedly, it makes any figure look sexier. Nothing can be sexier and wonderful than a saree and Indian men say yes too.</p>
          <div class="flex" style="user-select: auto;">
            <button
              class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
              style="user-select: auto;"><a href="images/color7.jpg" download>Download</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>`+
  `<hr>`+
  `<section data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"
    data-aos-delay="150" class="text-gray-600 body-font overflow-hidden" style="user-select: auto;">
    <div class="container px-5 py-24 mx-auto" style="user-select: auto;">
      <div class="lg:w-4/5 mx-auto flex flex-wrap" style="user-select: auto;">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="images/color8.jpg" style="user-select: auto;">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="user-select: auto;">
          <h2 class="text-sm title-font text-gray-500 tracking-widest" style="user-select: auto;">NISHANT</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" style="user-select: auto;">Minimal Ganesh</h1>
          <div class="flex mb-4" style="user-select: auto;">
          </div>
          <p class="leading-relaxed" style="user-select: auto;">This a pen art of Lord Ganesha made by Nishant, Ganesha is thus considered the master of intellect and wisdom. He is depicted as a big-bellied, yellow or red god with four arms and the head of a one- tusked elephant, riding on, or attended to by, a mouse. He is frequently represented sitting down, with one leg raised in the air and bent over the other.
            <br><br>
            Lord Ganesh is the second and young son of Lord Shiva and Goddess Parvati, he is also known as “Pratham Pujya” as he is the first god to be worshipped. Lord Ganesh also referred as “Vighna Vinashak” i.e. he is the one who destroys all the evils, obstacles and trouble from his devotee's life</p>
          <div class="flex" style="user-select: auto;">
            <button
              class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
              style="user-select: auto;"><a href="images/color8.jpg" download>Download</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>`+
 ` <hr>`+
  `<section data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"
    data-aos-delay="150" class="text-gray-600 body-font overflow-hidden" style="user-select: auto;">
    <div class="container px-5 py-24 mx-auto" style="user-select: auto;">
      <div class="lg:w-4/5 mx-auto flex flex-wrap" style="user-select: auto;">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="images/color9.jpg" style="user-select: auto;">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="user-select: auto;">
          <h2 class="text-sm title-font text-gray-500 tracking-widest" style="user-select: auto;">NISHANT</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" style="user-select: auto;">Love Buds</h1>
          <div class="flex mb-4" style="user-select: auto;">
          </div>
          <p class="leading-relaxed" style="user-select: auto;">Her smile I see something more beautiful than the stars.... <br><br>
          Come live in my heart and pay no rent. <br><br>
          I love you the way a drowning man loves air. ...<br><br>
          I need you like a heart needs a beat.<br><br>
          I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.</p>
          <div class="flex" style="user-select: auto;">
            <button
              class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
              style="user-select: auto;"><a href="images/color9.jpg" download>Download</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>`+
 ` <hr>`+
 ` <section data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"
    data-aos-delay="150" class="text-gray-600 body-font overflow-hidden" style="user-select: auto;">
    <div class="container px-5 py-24 mx-auto" style="user-select: auto;">
      <div class="lg:w-4/5 mx-auto flex flex-wrap" style="user-select: auto;">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="images/color11.jpg" style="user-select: auto;">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="user-select: auto;">
          <h2 class="text-sm title-font text-gray-500 tracking-widest" style="user-select: auto;">NISHANT</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" style="user-select: auto;">Kalu Hay Mera Kalu</h1>
          <div class="flex mb-4" style="user-select: auto;">
          </div>
          <p class="leading-relaxed" style="user-select: auto;"><strong>What can you say about dogs?</strong> <br>
            “A dog is the only thing on earth that loves you more than he loves himself.” “Hounds follow those who feed them.” “Dogs are not our whole life, but they make our lives whole.” “Every dog has his day, unless he loses his tail, then he has a weak-end.” <br><br>
            <strong>Why do I love dogs?</strong><br>
            Dogs are kind, loving, and compassionate – they forgive everything and never hold a grudge. No matter what a dog is doing, they are always present in the moment. If you watch your dog throughout the day you'll find that your dog is a better person than most humans.</p>
          <div class="flex" style="user-select: auto;">
            <button
              class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
              style="user-select: auto;"><a href="images/color11.jpg" download>Download</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>`+
 ` <hr>`+
 ` <section data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"
    data-aos-delay="150" class="text-gray-600 body-font overflow-hidden" style="user-select: auto;">
    <div class="container px-5 py-24 mx-auto" style="user-select: auto;">
      <div class="lg:w-4/5 mx-auto flex flex-wrap" style="user-select: auto;">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="images/color12.jpg" style="user-select: auto;">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="user-select: auto;">
          <h2 class="text-sm title-font text-gray-500 tracking-widest" style="user-select: auto;">NISHANT</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" style="user-select: auto;">Parrot</h1>
          <div class="flex mb-4" style="user-select: auto;">
          </div>
          <p class="leading-relaxed" style="user-select: auto;">Parrots are one of the fabulous bird on the planet. PSITTACINES is the scientific term for a parrot. The attractive color on a parrot's body gives everybody a feeling of joy and happiness. There are almost 339 species of parrot around the world. Parrots are generally found in warm regions</p>
          <div class="flex" style="user-select: auto;">
            <button
              class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
              style="user-select: auto;"><a href="images/color12.jpg" download>Download</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>`+
 ` <hr>`+
 ` <section data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"
    data-aos-delay="150" class="text-gray-600 body-font overflow-hidden" style="user-select: auto;">
    <div class="container px-5 py-24 mx-auto" style="user-select: auto;">
      <div class="lg:w-4/5 mx-auto flex flex-wrap" style="user-select: auto;">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="images/color13.jpg" style="user-select: auto;">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="user-select: auto;">
          <h2 class="text-sm title-font text-gray-500 tracking-widest" style="user-select: auto;">NISHANT</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" style="user-select: auto;">Squeirrel</h1>
          <div class="flex mb-4" style="user-select: auto;">
          </div>
          <p class="leading-relaxed" style="user-select: auto;">a lack of success or the inability to meet an expectation. The problem is that we can read too much into failure. Too often, we tie it to our sense of self-worth, self-esteem, and self-acceptance. The expectation we fail to meet is often our own, or one that we've created in our own head.</p>
          <div class="flex" style="user-select: auto;">
            <button
              class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
              style="user-select: auto;"><a href="images/color13.jpg" download>Download</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>`+
 ` <hr>`+
 ` <section data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"
    data-aos-delay="150" class="text-gray-600 body-font overflow-hidden" style="user-select: auto;">
    <div class="container px-5 py-24 mx-auto" style="user-select: auto;">
      <div class="lg:w-4/5 mx-auto flex flex-wrap" style="user-select: auto;">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="images/color14.jpg" style="user-select: auto;">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="user-select: auto;">
          <h2 class="text-sm title-font text-gray-500 tracking-widest" style="user-select: auto;">NISHANT</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" style="user-select: auto;">paper rangoli</h1>
          <div class="flex mb-4" style="user-select: auto;">
          </div>
          <p class="leading-relaxed" style="user-select: auto;">am, and PongalTraditionally, Rangoli is an art of decoration drawn on the floor or the entrances of homes. It is thought to bring good luck, prosperity on the house and in the family, and to welcome guests. Some mothers in India do this activity every morning, or on a special festive occasion like Diwali, On.
            <br><br>
            Diwali is celebrated, primarily to herald the coming of the Goddess Lakshmi. Prayers are offered to her, asking for her blessings in the form of wealth. As such, a Rangoli design is created at the entrance of the house, not only to welcome the guests that visit, but also the Goddess herself.</p>
          <div class="flex" style="user-select: auto;">
            <button
              class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
              style="user-select: auto;"><a href="images/color14.jpg" download>Download</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>`+
 ` <hr>`+
 ` <section data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"
    data-aos-delay="150" class="text-gray-600 body-font overflow-hidden" style="user-select: auto;">
    <div class="container px-5 py-24 mx-auto" style="user-select: auto;">
      <div class="lg:w-4/5 mx-auto flex flex-wrap" style="user-select: auto;">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="images/color15.jpg" style="user-select: auto;">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="user-select: auto;">
          <h2 class="text-sm title-font text-gray-500 tracking-widest" style="user-select: auto;">NISHANT</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" style="user-select: auto;">Indian marriage</h1>
          <div class="flex mb-4" style="user-select: auto;">
          </div>
          <p class="leading-relaxed" style="user-select: auto;">The Sangeet & Mehendi , the wedding ceremony and the reception are all important. Sangeet is a ceremony where the relatives and friends of the couple get together to know each other. This ceremony takes place at the bride's home.</p>
          <div class="flex" style="user-select: auto;">
            <button
              class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
              style="user-select: auto;"><a href="images/color15.jpg" download>Download</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>`+
 ` <hr>`+
  `<section data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"
    data-aos-delay="150" class="text-gray-600 body-font overflow-hidden" style="user-select: auto;">
    <div class="container px-5 py-24 mx-auto" style="user-select: auto;">
      <div class="lg:w-4/5 mx-auto flex flex-wrap" style="user-select: auto;">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="images/color16.jpg" style="user-select: auto;">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="user-select: auto;">
          <h2 class="text-sm title-font text-gray-500 tracking-widest" style="user-select: auto;">NISHANT</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" style="user-select: auto;">Saraswati Maa</h1>
          <div class="flex mb-4" style="user-select: auto;">
          </div>
          <p class="leading-relaxed" style="user-select: auto;">Saraswati is a Hindu goddess who represents education,
            creativity, and music. The name Saraswati stems from the Sanskrit root "saras," which means "that which is
            fluid." Maa Saraswati is known to bring order out of chaos and has a calming and centering personality.</p>
          <div class="flex" style="user-select: auto;">
            <button
              class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
              style="user-select: auto;"><a href="images/color16.jpg" download>Download</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>`+
 ` <hr>`+
 ` <section data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"
    data-aos-delay="150" class="text-gray-600 body-font overflow-hidden" style="user-select: auto;">
    <div class="container px-5 py-24 mx-auto" style="user-select: auto;">
      <div class="lg:w-4/5 mx-auto flex flex-wrap" style="user-select: auto;">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="images/color17.jpg" style="user-select: auto;">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="user-select: auto;">
          <h2 class="text-sm title-font text-gray-500 tracking-widest" style="user-select: auto;">NISHANT</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" style="user-select: auto;">Moon knight</h1>
          <div class="flex mb-4" style="user-select: auto;">
          </div>
          <p class="leading-relaxed" style="user-select: auto;"> he doesn't actually possess the power of flight. Instead, thanks to his supernatural cape, he does have the ability to glide or long distances – something we saw take place in the Moon Knight season finale, as Khonshu propelled him into the sky and allowed him to glide.</p>
          <div class="flex" style="user-select: auto;">
            <button
              class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
              style="user-select: auto;"><a href="images/color17.jpg" download>Download</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>`+
 ` <hr>`+
 ` <section data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"
    data-aos-delay="150" class="text-gray-600 body-font overflow-hidden" style="user-select: auto;">
    <div class="container px-5 py-24 mx-auto" style="user-select: auto;">
      <div class="lg:w-4/5 mx-auto flex flex-wrap" style="user-select: auto;">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="images/color18.jpg" style="user-select: auto;">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="user-select: auto;">
          <h2 class="text-sm title-font text-gray-500 tracking-widest" style="user-select: auto;">NISHANT</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" style="user-select: auto;">dead skelaton</h1>
          <div class="flex mb-4" style="user-select: auto;">
          </div>
          <p class="leading-relaxed" style="user-select: auto;">
            The skeletal system works as a support structure for your body. It gives the body its shape, allows movement, makes blood cells, provides protection for organs and stores minerals. The skeletal system is also called the musculoskeletal system.</p>
          <div class="flex" style="user-select: auto;">
            <button
              class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
              style="user-select: auto;"><a href="images/color18.jpg" download>Download</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>`+
 ` <hr>`+
 ` <section data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"
    data-aos-delay="150" class="text-gray-600 body-font overflow-hidden" style="user-select: auto;">
    <div class="container px-5 py-24 mx-auto" style="user-select: auto;">
      <div class="lg:w-4/5 mx-auto flex flex-wrap" style="user-select: auto;">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="images/color19.jpg" style="user-select: auto;">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="user-select: auto;">
          <h2 class="text-sm title-font text-gray-500 tracking-widest" style="user-select: auto;">NISHANT</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" style="user-select: auto;">village</h1>
          <div class="flex mb-4" style="user-select: auto;">
          </div>
          <p class="leading-relaxed" style="user-select: auto;">A village is a place that is far away from the pollution and noise of the city. Also, you feel a connection with the soil in a village. Moreover, there are trees, a variety of crops, diversity of flowers, and rivers, etc. Besides all this, you feel the cold breeze at night and a warm but pleasant breeze in the day.</p>
          <div class="flex" style="user-select: auto;">
            <button
              class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
              style="user-select: auto;"><a href="images/color19.jpg" download>Download</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>`+
 ` <hr>`+
 ` <section data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"
    data-aos-delay="150" class="text-gray-600 body-font overflow-hidden" style="user-select: auto;">
    <div class="container px-5 py-24 mx-auto" style="user-select: auto;">
      <div class="lg:w-4/5 mx-auto flex flex-wrap" style="user-select: auto;">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="images/color20.jpg" style="user-select: auto;">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="user-select: auto;">
          <h2 class="text-sm title-font text-gray-500 tracking-widest" style="user-select: auto;">NISHANT</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" style="user-select: auto;">Village</h1>
          <div class="flex mb-4" style="user-select: auto;">
          </div>
          <p class="leading-relaxed" style="user-select: auto;">A village is a place that is far away from the pollution and noise of the city. Also, you feel a connection with the soil in a village. Moreover, there are trees, a variety of crops, diversity of flowers, and rivers, etc. Besides all this, you feel the cold breeze at night and a warm but pleasant breeze in the day.</p>
          <div class="flex" style="user-select: auto;">
            <button
              class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
              style="user-select: auto;"><a href="images/color20.jpg" download>Download</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>`+
 ` <hr>`+
 ` <section data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"
    data-aos-delay="150" class="text-gray-600 body-font overflow-hidden" style="user-select: auto;">
    <div class="container px-5 py-24 mx-auto" style="user-select: auto;">
      <div class="lg:w-4/5 mx-auto flex flex-wrap" style="user-select: auto;">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="images/color21.jpg" style="user-select: auto;">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="user-select: auto;">
          <h2 class="text-sm title-font text-gray-500 tracking-widest" style="user-select: auto;">NISHANT</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" style="user-select: auto;">Lata Mangeshkar</h1>
          <div class="flex mb-4" style="user-select: auto;">
          </div>
          <p class="leading-relaxed" style="user-select: auto;">In a career spanning nearly eight decades, Lata Mangeshkar was the singing voice for a bevy of Bollywood leading ladies. She lent her voice to over 5,000 songs in over a thousand Hindi and 36 regional films. She had an unprecedented impact on Indian film music.</p>
          <div class="flex" style="user-select: auto;">
            <button
              class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
              style="user-select: auto;"><a href="images/color21.jpg" download>Download</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>`+
 ` <hr>`+
 ` <section data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"
    data-aos-delay="150" class="text-gray-600 body-font overflow-hidden" style="user-select: auto;">
    <div class="container px-5 py-24 mx-auto" style="user-select: auto;">
      <div class="lg:w-4/5 mx-auto flex flex-wrap" style="user-select: auto;">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="images/color22.jpg" style="user-select: auto;">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="user-select: auto;">
          <h2 class="text-sm title-font text-gray-500 tracking-widest" style="user-select: auto;">NISHANT</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" style="user-select: auto;">Saraswati Maa</h1>
          <div class="flex mb-4" style="user-select: auto;">
          </div>
          <p class="leading-relaxed" style="user-select: auto;">Saraswati is a Hindu goddess who represents education,
            creativity, and music. The name Saraswati stems from the Sanskrit root "saras," which means "that which is
            fluid." Maa Saraswati is known to bring order out of chaos and has a calming and centering personality.</p>
          <div class="flex" style="user-select: auto;">
            <button
              class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
              style="user-select: auto;"><a href="images/color22.jpg" download>Download</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>`+
 ` <hr>`+
 ` <section data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200"
    data-aos-delay="150" class="text-gray-600 body-font overflow-hidden" style="user-select: auto;">
    <div class="container px-5 py-24 mx-auto" style="user-select: auto;">
      <div class="lg:w-4/5 mx-auto flex flex-wrap" style="user-select: auto;">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="images/color23.jpg" style="user-select: auto;">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="user-select: auto;">
          <h2 class="text-sm title-font text-gray-500 tracking-widest" style="user-select: auto;">NISHANT</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" style="user-select: auto;">Sushant singh rajput</h1>
          <div class="flex mb-4" style="user-select: auto;">
          </div>
          <p class="leading-relaxed" style="user-select: auto;">Sushant Singh Rajput (21 January 1986 – 14 June 2020) was an Indian actor known for his work in Hindi cinema. He starred in a number of commercially successful Hindi films such as M.S. Dhoni: The Untold Story (2016), Kedarnath (2018) and Chhichhore (2019).</p>
          <div class="flex" style="user-select: auto;">
            <button
              class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
              style="user-select: auto;"><a href="images/color23.jpg" download>Download</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>`
})
