<script>
  import Logo from '../../assets/kaftan2.jpg' 
  import Card  from '../../assets/card.webp'
  import World from '../../assets/img/worldwide.webp'
</script>

<footer>
<section>
  <div class='info'>
      <div class="logo">
    <img src={Logo} alt="logo">
      </div>
      <!-- <FaPhone style='font-size: 1rem;width: 2em;' /> -->
      <p>+1 443-699-8766</p>
      <p>ivychickaftan2005@gmail.com</p>
  </div>
  <div class='info'>
     <p>Footer Menu </p>
     <a href="/faq">Faq</a>
     <a href="/about">About</a>
     <a href="/policy">Policy</a>
     <a href="/contact">Contact-us</a>
  </div>
  <div class='info'>
     <p>My Account</p>
     <a href="/faq">Home</a>
     <a href="/about">My-Cart</a>
     <a href="/policy">My-Wishlist</a>
     <a href="/login">Login</a>
  </div>
  
  <div class="wide">
    <img src={World} alt="img">
  </div>
</section>

<div class="kaftan">
  <p>Kaftans Female Cloth Empire 2025</p>
  <div class="img">
    <img src={Card} alt="card">
  </div>
</div>

<div class="developer">
    <p>NEVERTHELESSE</p>
    <p>neverthelsse21@gmail.com</p>
    <p>+234 905 1602 526</p>
</div>
</footer>
<style scoped>
  footer{
    background-color: black;
    color: white;
    animation: move;
    animation-timeline: view();
    animation-range: 0.3, 1;
  }

  @keyframes move{
    from{
      transform: translateY(10rem);
      opacity: 0.8;
      filter: blur(1px);
    }
    to{
      transform: translateY(0);
      opacity: 1;
      filter: blur(0);
      }
  }
  
  .img{
    width: 24rem;
    height: 1rem;
  }
img{
  width: 100%;
  height: 100%;
}
  .developer{
    display: flex;
    justify-content: space-between;
    color: var(--primaryColor);
    padding: 1rem 4rem;
  }
  
  .kaftan{
    border-bottom: 1px solid white;
    font-size: 1.4rem;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
  }
  
  section{
    display: flex;
    justify-content: space-between;
    align-items: center;
padding: 0 5rem;
    p{
      margin: 10px 0;
    }
    
    .info{
      font-size: 1.3rem;
      display: flex;
      flex-direction: column;
    }
    a{
      text-decoration: none;
      color: white;
      margin-bottom: 10px;
    }
.logo{
  width: 16rem;
  height: 7rem;
  img{
    width: 100%;
    height: 100%;
  }
}
  }
</style>