// import './App.css';
import React,{useEffect} from 'react'
import Head from './Head'
import './App.css'
import tech from './img/hero.jpg'
import service from './img/service.png'
import manufacturing from './img/manufacturing.png'
import { IoIosArrowDown } from "react-icons/io"
import DivItem from './divItem'
import kbstatlogo from './img/kb-logo-stat.png'


function App() {
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
    detectsceen()
    lazylaod();
    lazyloadopcaity();
    var counter=1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked=true;
      counter++;
      if(counter>3){
        counter=1
      }
    },6000)
    window.addEventListener('scroll',()=>lazylaod())
    window.addEventListener('resize',()=>setWith())
   
   
     

    return () => {
      window.removeEventListener('scroll',()=>lazylaod())

      
      
    }
  }, [])
  return (
    <main className="container">
        <Head/>
        <div className="body-slider">
        <div className="slider">

        <div className="slides">
              <input type="radio" name="radio-btn" id="radio1"/>
              <input type="radio" name="radio-btn" id="radio2"/>
              <input type="radio" name="radio-btn" id="radio3"/>
            


              <div className="slide first desc-1">
                  <div className="carossel-item">
                    <h1>Redefine your businness1</h1>
                  </div>
                  <div className="carossel-item">
                      <img src={kbstatlogo} alt="logo statistic on screen"></img>
                  </div>
              </div>
              <div className="slide desc-2">
                      <div className="carossel-item">
                      <h1>Redefine your businness1</h1>
                    </div>
                    <div className="carossel-item">
                    <h1>Redefine your businness2</h1>
                    </div>

              </div>
              <div className="slide desc-3">
                      <div className="carossel-item">
                      <h1>Redefine your businness1</h1>
                    </div>
                    <div className="carossel-item">
                    <h1>Redefine your businness2</h1>
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


      
      </div>

        </div>
       

        <div className="Home-Second-Panel">
          <h4>What industry?</h4>
            <section>
                  <a href="#">
                    <img></img>
                    <h3>E-commerce</h3>
                    <p>Achieve purchase of your product easilty</p>
                    <p>Lear more</p>
                  </a>
            </section>
            <section>
                  <a href="#">
                    <img></img>
                    <h3>Finance</h3>
                    <p>Achieve purchase of your product easilty</p>
                    <p>Lear more</p>
                  </a>
            </section>
            <section>
            <a href="#">
              <img></img>
              <h3>Learning Platform</h3>
              <p>Achieve purchase of your product easilty</p>
              <p>Lear more</p>
            </a>
      </section>
      <section>
      <a href="#">
        <img></img>
        <h3>Media & Entertaiment</h3>
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
                <h3>Finance</h3>
                <p>Achieve purchase of your product easilty</p>
                <p>Lear more</p>
              </a>
          </section>
          <section>
          <a href="#">
            <img></img>
            <h3>Finance</h3>
            <p>Achieve purchase of your product easilty</p>
            <p>Lear more</p>
          </a>
      </section>
      <section>
          <a href="">
            <img></img>
            <h3>Finance</h3>
            <p>Achieve purchase of your product easilty</p>
            <p>Lear more</p>
          </a>
      </section>
        </div>

        <div className="Services">
            <h1>services</h1>
            <table>
            <tr>
               <th  className="Service-image">
                <img data-src={service } alt="service"></img>
               
                   
               </th>
               <th className="Service-section">
             
                
               <h1>Our Approach</h1>
               <p>Build Amazing Solution that Support your Bussiness</p>
               <p>Learn more</p>
             
                     
                   
               </th>
           </tr>
             
         </table>
        </div>

        <div className="new">
          <h1>Our Solution everywhere</h1>
          <ul className="list-items-mob-view">
           <DivItem>  Manufacturing
             
           </DivItem>
           <li className="lb-container">
            <div className="container-wrapper ">
                          
                            <h1>IA Sofware </h1>
                        
            </div>
           </li>
          
           <DivItem>  Finance
           </DivItem>
           <li className="lb-container"><div className="container-wrapper">
           Finance
           </div></li>
            <DivItem>  Entertainment</DivItem>
            <li className="lb-container "><div className="container-wrapper">
            Entertainment
            </div></li>
            
            <DivItem>  Online Store
            </DivItem>
            <li className="lb-container "><div className="container-wrapper">
            Onlie Store
            </div></li>
            
          </ul>
          <ul className="list-items-dek-view">
            <li className="active" onClick={selection}>Manufacturing</li>
            <li onClick={selection}>Finance</li>
            <li onClick={selection}>Gaming</li>
            <li onClick={selection}>Entertainment</li>
            <li onClick={selection}>Onlie Store</li>
          </ul>

          <div id='Manufacturing' className='new-section canbehidde'>
              <div>
                <img src={manufacturing} alt="{manufacturing"/>
              </div>
              <div>
                <h1>IA Sofware </h1>
            </div>
   

          </div>
          <div id='Finance' className="canbehidde">
          Finance

         </div>

      
       
        
        </div>
         
       
     
    </main>
  );
}

export default App;
