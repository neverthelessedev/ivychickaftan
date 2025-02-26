<script>
  import Deluxe from '../../assets/img/promo2.webp'
  import Wide from '../../assets/img/worldwide.webp'
  import Promo from '../../assets/img/promo1.webp'
</script>

<section>
  <main>
    <div class="img">
      <img src={Deluxe} alt="promo" >
    </div>
    <div class="img">
      <img src={Wide} alt="world wide" >
    </div>
  </main>
 <div class='cover'>
   <div class="img">
     <img src={Promo} alt="promo" >
   </div>
   <div>
    <section class='img side'>
      <div>

        <p>Our Top Collection</p>
        <li>Rich and famous dresses</li>
        <li>Silk milkado dresses</li>
        <li>High Fashions</li>
        <li>Tie dye kaftans dress</li>      
      </div>
      <div>

        <p>Our Features</p>

        <li>Fast & Secure Payment</li>
                <li>Quickly Delivery</li>
                <li>Good quality dress with low price</li>
      </div>


      

      

    </section>
    
   </div>
 </div>
</section>
<style scoped>


  
  main{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .cover{
    display: flex;
    justify-content: space-around;
    margin: 3rem;

    p{
      font-size: 2rem;
      font-weight: bold;
      text-decoration: underline;
      margin: 1rem 0;
    }
    li{
      font-size: 1.5rem;
      margin: 10px 0;
    }
    
  }
  
  section{
    padding: 3rem;
border-bottom: 1px solid var(--secondaryColor);
margin: 10px 0;
  }
  .img{
    width: 30rem;
    height: 30rem;
    background: var(--primaryColor);
    border-radius: 3rem;
    overflow: hidden;
    animation: zoom;
    animation-timeline: view();
    animation-range: entry 0 cover 60%;
  }
  @keyframes zoom{
    from{
      transform: scale(0.7);
      
    }to{
      
      transform: scale(1);
    }
        
  }
  
  img{
width: 100%;
height: 100%;
object-fit: cover;
  }
  .side{
  background-color: var(--secondaryColor);
  color: white;
  border-radius: 2rem;
}

@media(max-width:1117px){
  .img{
    width:  25rem;
    height: 25rem;
  }p{font-size: 1rem;}
  li{
    font-size: 1rem;
  }
}
@media(max-width:901px){
  .img{
    width:  20rem;
    height: 20rem;
  }
}
@media(max-width:748px){
  .img{
    width:  15rem;
    border-radius: 0;
    height: 15rem;
  }
  .cover{
    margin: 1rem;
  }
}
@media(max-width: 623px){
.img{
  width: 100%;
  margin: 10px;
  /* height: 30rem; */
}
main{
  flex-direction: column;
}
}
</style>