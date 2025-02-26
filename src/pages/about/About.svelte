<script>
import Image from '../../assets/kaftan2.jpg'
  import {FaInstagram,FaEnvelope,FaTicketAlt} from 'svelte-icons/fa'
</script>
<main>
  <div class="img">

    <img src={Image} alt="about">
  </div>
<section>
    <h3>About Kaftan</h3>
    <p>Welcome to Ivy Chic Kaftan, where elegance meets effortless luxury. Our brand is dedicated to redefining timeless style with our exquisite collection of kaftans and bubu dresses. Designed for the modern woman who values comfort, sophistication, and individuality, our pieces are a celebration of heritage and contemporary flair. Each design is crafted with the finest fabrics and meticulous attention to detail, ensuring a perfect blend of beauty and functionality. Whether you're lounging at home, attending a special event, or exploring exotic destinations, Ivy Chic Kaftan offers versatile statement pieces that embody grace and confidence. At Ivy Chic Kaftan, we believe in empowering women to express their unique essence through fashion that feels as good as it looks. Step into a world of refined elegance—step into Ivy Chic Kaftan.</p>
    <div class="follow">
      <h4>You can reach us</h4>
      <div class='container'>
        <div class="cover">
          <a href="https://www.instagram.com/ivychickaftan">
            <FaInstagram size='10' />
          </a>
        </div>
        <div class="cover">
          <a href="https://www.tiktok.com/@ivychic_kaftan">
            <FaTicketAlt size='10' />
          </a>
        </div>
        <div class="cover">
          <a href="https://mail.google.com/mail/u/1/?ogbl#inbox?compose=new">
            <FaEnvelope size='10' />
          </a>
        </div>
      </div>
    </div>
</section>
</main>  

<style scoped>
  main{
    width: 100vw;
    height: 100vh;
    padding: 0 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }a{
    color: black;
  }.container{
    display: flex;
  }
  .cover{
    font-size: 2rem;
    border: 2px solid var(--secondaryColor);
    width: 4rem;
    height: 4rem;
    margin-right: 1.3rem;
    border-radius: 1rem;
    padding: 10px;
  }
  section{
    width: 50%;
    p{
      font-size: 1.3rem;
    }
    h4{
      font-size: 2rem;
      margin: 1rem 0;
    }
    h3{
      font-size: 3rem;
      text-decoration: underline;
      
    }
  }
.img{
  width: 30rem;
  background: var(--primaryColor);
  height: 30rem;
}
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>