import React,{useEffect} from 'react';
import service from './img/service.png';
import DivItem from './divItem';
import kbstatlogo from './img/kb-logo-stat.png';
import item_service_courses from './img/item_service_courses.png';
import item_service_team from './img/team-work.png';
import item_service_game from './img/game.png';
import Head from './Head';
import Footer from './Footer';
import manufacture from './img/manufacture.png';
import entertainment from './img/entertainment.png'
import fincance from './img/finances.png'
import game from './img/gaming.png'
import store from './img/store.png'
import icon1 from './img/icons/icon_deploy.png'
import icon2 from './img/icons/icon_ideas.png'
import icon3 from './img/icons/icon_prototype.png'



export default function Home() {


    function reveal(){
      var reveals=document.querySelectorAll('.reveal');
      for(var i=0;i<reveals.length;i++){
        var windowheight=window.innerHeight;
        var revealtop=reveals[i].getBoundingClientRect().top;
        var revealpoint=150;

        if(revealtop < windowheight-revealpoint){
          reveals[i].classList.add('isactive');
        }else{
          reveals[i].classList.remove('isactive');
        }
      }

    }
    function tabSelection(){
      const tags=document.querySelectorAll('[data-tab-target]');
      const tabContents=document.querySelectorAll('[data-tab-content]');
      tags.forEach(tab=>{
        tab.addEventListener('click',()=>{
            const target=document.querySelector(tab.dataset.tabTarget)
            tabContents.forEach(tabContent=>{
                tabContent.classList.remove('tab-active')
            })
            tags.forEach(tab=>{
                tab.classList.remove('active')
            })
            tab.classList.add('active')
            target.classList.add('tab-active')
        })
    })
    }
    const selection=(e)=>{
        const topicItem=document.querySelectorAll('.new ul li');
        const topicDiv=document.querySelectorAll('.canbehidde');
        for(var i=0;i<topicItem.length;i++){
          topicItem[i].classList.remove('active')
        }
        for(var j=0;j< topicDiv.length;j++){
          topicDiv[j].style.visibility='hidden';
        }
        e.target.classList.add('active');
        if(e.target.textContent==="Manufacturing"){
         document.getElementById('Manufacturing').style.visibility='visible';
        }
        if(e.target.textContent==="Finance"){
          document.getElementById('Finance').style.visibility='visible';
        }
        
      
      }
      function setWith(){
        var slides=document.querySelectorAll('.slide ');
        for(var i=0;i<slides.length;i++){
          slides[i].style.width=""+window.innerWidth+"px";
          
        }
      }
      function detectsceen(){
        var slides=document.querySelectorAll('.slide ');
        if(window.screen){
          for(var i=0;i<slides.length;i++){
            slides[i].style.width=""+window.screen.width+"px";
            
          }
        }
      }
      
      // function openSub(e){
      //     if(e.target.classList.contains('lb-trigger') && e.target.classList.contains('lb-active')){
      //         e.target.classList.remove('lb-active')
      //         e.target.nextElementSibling.classList.add('lb-hide')
              
             
      //     }else if(e.target.classList.contains('lb-trigger')){
      //       e.target.nextElementSibling.classList.remove('lb-hide')
      //       e.target.classList.add('lb-active')
      //     }
      // }
      useEffect(() => {
        
      
        function lazyloadopcaity(){
          let id=null;
          const sections=document.querySelectorAll('.Home-Second-Panel section');
          let op=0;
          clearInterval(id);
          id=setInterval(frame,160); 
        
          function frame(){
            if(op>=1){
              clearInterval(id)
    
            }else{
              
              op+=0.1;
              for(var i=0;i<sections.length;i++){
                sections[i].style.opacity=op;
               
               
              }
             
            }
          }
       
        }
      
        function lazylaod(){
          var index=0;
        var elements=document.querySelectorAll('img[data-src]');
    
        if( index>=elements.length) return ;
        var item=elements[index];
        if((window.scrollY+window.innerHeight)>1300){
          var src = item.getAttribute("data-src");
          item.src = src;
          item.addEventListener('load', function() {
          item.removeAttribute('data-src');     
          });
          // index++;
    
        }
      }
      function animSlide(){
        var counter=1;
        document.getElementById('radio' + counter).checked=true;
        let id=null;
        const arrowleft=document.getElementById('arrow-left');
        const arrowright=document.getElementById('arrow-right');
         autoplay();
        function autoplay(){
          id=setInterval(function(){
            if( document.getElementById('radio' + counter)){
              document.getElementById('radio' + counter).checked=true;
              counter++;
            }else{
              return
            }
          
            if(counter>3){
              counter=1
            }
           },8000)
        }
        function stopplay(){
          clearInterval(id);
        }
       
         function increase(total){
           stopplay();
          counter++;
          if(counter>total){
            counter=1
          }
          document.getElementById('radio' + counter).checked=true;
          autoplay()
         
        }
    
        function decrease(minim){
          stopplay();
          clearInterval(id)
          counter--;
          if(counter<=minim){
            counter=1
          }
          document.getElementById('radio' + counter).checked=true;
          autoplay()
          
        }
    
       
        arrowright.addEventListener('click',()=>increase(3))
        arrowleft.addEventListener('click',()=>decrease(1))
      }
     
     
     
        tabSelection();
        detectsceen();
        lazylaod();
        // lazyloadopcaity();
        animSlide();
     
        
      
        window.addEventListener('scroll',()=>lazylaod())
        window.addEventListener('scroll',()=>reveal())
        window.addEventListener('resize',()=>setWith())
      
        
       
         
    
        return () => {
          window.removeEventListener('scroll',()=>lazylaod())
          window.removeEventListener('scroll',()=>reveal())
        
          // arrowright.removeEventListener('click',()=>increase(3))
          // arrowleft.removeEventListener('click',()=>decrease(1))
    
          
          
        }
      }, [])
    
    return (
      <>
        <Head/>
        <div className="main-body">
        <div className="body-slider">
        <div className="slider">

        <div className="slides">
              <input type="radio" name="radio-btn" id="radio1"/>
              <input type="radio" name="radio-btn" id="radio2"/>
              <input type="radio" name="radio-btn" id="radio3"/>
            


              <div className="slide first desc-1">
                  <div className="carossel-item-text">
                    <h1>Increase your business productivity</h1>
                    <p>We help you build your presence onlie by using 
                    the latest technolgies of the cloud and applications</p>
                  </div>
                  <div className="carossel-item-img">
                      <img src={kbstatlogo} alt="logo statistic on screen"></img>
                  </div>
              </div>
              <div className="slide desc-2">
                      <div className="carossel-item-text">
                      <h1>Integrate popular app to your system to increase your productivity</h1>
                      <p>we integrate application like Brightspace, wordpress, office, topdesk</p>
                    </div>
                    <div className="carossel-item-img">
                    
                    </div>

              </div>
              <div className="slide desc-3">
                      <div className="carossel-item-text">
                      <h1>Learn and pratice</h1>
                      <p>We want to give you the opportunity have access to plenty of contents and get assist by professional</p>
                    </div>
                    <div className="carossel-item-img">
                    
                    </div>

              </div>

              <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>

        </div>

      </div>
        

         
          <div className="navigation-manual">
            <label for="radio1" className="manual-btn"></label>
            <label for="radio2" className="manual-btn"></label>
            <label for="radio3" className="manual-btn"></label>
          </div>
          <div className="arrow-left-wrapper">
              <div id="arrow-left"></div>
          </div>
          <div className="arrow-right-wrapper">
              <div id="arrow-right"></div>
          </div>
         
      
      </div>

        </div>
       

        <div className="Home-Second-Panel">
          <h4>What industry?</h4>
            <section>
                  <a href="#">
                    <img></img>
                    <h2>E-commerce</h2>
                    <p>Achieve purchase of your product easilty</p>
                    <p>Lear more</p>
                  </a>
            </section>
            <section>
                  <a href="#">
                    <img></img>
                    <h2>Finance</h2>
                    <p>Achieve purchase of your product easilty</p>
                    <p>Lear more</p>
                  </a>
            </section>
            <section>
            <a href="#">
              <img></img>
              <h2>Learning Platform</h2>
              <p>Achieve purchase of your product easilty</p>
              <p>Lear more</p>
            </a>
      </section>
      <section>
      <a href="#">
        <img></img>
        <h2>Media & Entertaiment</h2>
        <p>Achieve purchase of your product easilty</p>
        <p>Lear more</p>
      </a>
</section>
        </div>
        <div className="Home-Third-Panel">
          <h1>Complete  Assistance with shopify Setting & development </h1>
            <section>
              <a href="#">
                <img></img>
                <h2>Finance</h2>
                <p>Achieve purchase of your product easilty</p>
                <p>Lear more</p>
              </a>
          </section>
          <section>
          <a href="#">
            <img></img>
            <h2>Finance</h2>
            <p>Achieve purchase of your product easilty</p>
            <p>Lear more</p>
          </a>
      </section>
      <section>
          <a href="">
            <img></img>
            <h2>Finance</h2>
            <p>Achieve purchase of your product easilty</p>
            <p>Lear more</p>
          </a>
      </section>
        </div>

        <div className="Services">
              <div className="services-title-section">
                    <div className="legrowtech-logo">
                  
                 </div>
                  <h2 className="legrowtech-title">Why Legrowtech?</h2>
                  <p className="legrowtech-text">At Legrowtech, Legrowtech platform connects you with experienced talent from around the world, so you can focus on building your product and scaling your business.</p>
              </div>
            <div className="services-grid">
                  <div className="service-grid-item">
                      <div className="grid-img">
                        <img src={icon1} alt ="legrowtech icon deploy"/>
                      </div>
                      <h3>Extensive list of Technical Services</h3>
                      <p className="legrowtech-description">Whether you need to hire a software engineer with expertise in React, Golang, DevOps, or Salesforce, we have the engineering talent in place across
                         a wide variety of technical stacks and services to meet your organization’s needs.</p>
                  </div>

                  <div className="service-grid-item">
                      <div className="grid-img">
                        <img src={icon2} alt ="legrowtech icon ideas"/>
                      </div>
                      <h3>Extensive list of Technical Services</h3>
                      <p className="legrowtech-description">Whether you need to hire a software engineer with expertise in React, Golang, DevOps, or Salesforce, we have the engineering talent in place across
                         a wide variety of technical stacks and services to meet your organization’s needs.</p>
                  </div>

                  <div className="service-grid-item">
                      <div className="grid-img">
                       <img src={icon3} alt ="legrowtech icon protytpe"/>
                      </div>
                      <h3>Extensive list of Technical Services</h3>
                      <p className="legrowtech-description">Whether you need to hire a software engineer with expertise in React, Golang, DevOps, or Salesforce, we have the engineering talent in place across
                         a wide variety of technical stacks and services to meet your organization’s needs.</p>
                  </div>
            </div>

          
             
            
        </div>

        <div className="hand-services">
          <h2>Work with us now</h2>
            <div className="cards_services reveal">
          
                  <div className="service-item text-cards">
                  <a href="/services">
                      <img src={item_service_courses} alt="get legrowtech courses"></img>
                      <div className="legrowtech-text-postion center">
                          <h3>Real expert </h3>
                      </div>
                      <div className="paragraph-text">
                        <h3>The most professional tech exprert </h3>
                        <p>personlaise your website</p>
                        
                      </div>
                    </a>
                  </div>
       
                  <div className="service-item text-cards">
                  <a href="/services">
                      <img src={item_service_team} alt=" legrowtech work togethers"></img>
                      <div className="legrowtech-text-postion center">
                          <h3>Enhance your skills</h3>
                      </div>
                      <div className="paragraph-text">
                        <h3>Personlise</h3>
                        <p>personlaise your website</p>
                        
                      </div>
                    </a>
                  </div>
                  <div className="service-item text-cards">
                  <a href="/services">
                      <img src={item_service_game} alt=" legrowtech game"></img>
                      <div className="legrowtech-text-postion center">
                          <h3>Game studio</h3>
                      </div>
                      <div className="paragraph-text">
                        <h3>2d/3d game in vision</h3>
                        <p>personlaise your website</p>
                        
                      </div>
                    </a>
                  </div>
             

            </div>

        </div>

        <div className="new">
          <h1>Our Solution everywhere</h1>
          <ul className="list-items-mob-view">
           <DivItem>  Manufacturing
             
           </DivItem>
           <li className="lb-container">
            <div className="container-wrapper ">
                          
                <div>
                        <img src={manufacture} alt="legrowtech manufacture "></img>
                  </div>
                  <div>
                        <h3>Manufacture </h3>
                        <p>sdsd</p>
                </div>
                        
            </div>
           </li>
          
           <DivItem>  Finance
           </DivItem>
           <li className="lb-container"><div className="container-wrapper">
            <div>
                       <img src={fincance} alt="legrowtech finance"></img>
                </div>
                <div>
                    <h3>Finance </h3>
                      <p>sdsd</p>
                </div>
           </div></li>
            <DivItem>  Entertainment</DivItem>
            <li className="lb-container ">
              <div className="container-wrapper-noflex">
                <img src={entertainment} alt="legrowtech entertainment"></img>
                <h3>Passionate about create game and learn? get the tool you need</h3>
                <p>Learn more</p>
            </div>
            </li>
            
            <DivItem>  Online Store
            </DivItem>
            <li className="lb-container "><div className="container-wrapper">
            <div>
                <img src={store} alt="legrowtech store"></img>
              </div>
              <div>
                  <h3>Finance </h3>
                    <p>sdsd</p>
              </div>
            </div></li>
            
          </ul>
          <ul className="list-items-dek-view">
            <li className="active" data-tab-target="#manufacture">Manufacturing</li>
            <li data-tab-target="#finance" >Finance</li>
            <li  data-tab-target="#gaming">Gaming</li>
            <li data-tab-target="#entertaiment">Entertainment</li>
            <li data-tab-target="#store">Onlie Store</li>
          </ul>

          <div id='manufacture' className='item-solution tab-active'  data-tab-content>
              <div>
                    <img src={manufacture} alt="legrowtech manufacture "></img>
              </div>
              <div>
                <h3>Manufacture </h3>
                <p>sdsd</p>
            </div>
   

          </div>
          <div id='finance' data-tab-content className="item-solution">
              <div>
                <img src={fincance} alt="legrowtech finance"></img>
              </div>
              <div>
                  <h3>Finance </h3>
                    <p>sdsd</p>
              </div>

         </div>
         <div id='gaming' data-tab-content className="item-solution-noflex">
            <img src={game} alt="legrowtech video game"></img>
          <a href="/services">  
         <div>
             <h3>Passionate about create game and learn? get the tool you need</h3>
             <p>Learn more</p>
         </div>
          </a>

         </div>
         <div id='entertaiment' data-tab-content className="item-solution-noflex">
         <img src={entertainment} alt="legrowtech entertainment"></img>
        <a href="/service">
            <div>
              <h3>Are youn an Artist ? need of Visual and audio integration?</h3>
              <p>Learn more</p>
            </div>
        </a>
         

        

          
         </div>
         <div id='store' data-tab-content className="item-solution">
              <div>
                <img src={store} alt="legrowtech store"></img>
              </div>
              <div>
                  <h3>Finance </h3>
                    <p>sdsd</p>
              </div>
         </div>
      
       
        
        </div>
       
        </div>
        <Footer/>
        </>
    )
}
