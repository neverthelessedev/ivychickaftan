<script>
  import Home from './pages/home/Home.svelte';
  import About from './pages/about/About.svelte';
  import Header from './components/header/Header.svelte';
  import Footer from './components/footer/Footer.svelte';
  import Notification from 'svelte-notifications'
  import Contact from './pages/contact/Contact.svelte';
  import Wishlist from './pages/wishlist/Wishlist.svelte';
  import Faq from './pages/faq/Faq.svelte';
  import Login from './pages/auth/Login.svelte';
  import CreateAccount from './pages/auth/CreateAccount.svelte';
  import Policy from './pages/policy/Policy.svelte';
  import SpecificProduct from './pages/specificProduct/SpecificProduct.svelte';
  import ScrollToTop from './components/header/ScrollToTop.svelte';
  import Shops from './pages/shop/Shops.svelte';


const locate = window.location.search
</script>


 <Notification>
   <Header />
   {#if locate == '?about-us'}
   <About />
   {:else if locate == '?shops'}
   <Shops />
   {:else if locate == '?contact-us'}
   <Contact />
   {:else if locate == '?Privacy&Policy'}
   <Policy />
   {:else if locate == '?wishlist'}
<Wishlist />
   {:else if locate == '?product'}
<SpecificProduct />
   {:else if locate == '?register'}
<CreateAccount />
   {:else if locate == '?login'}
   <Login />
   {:else if locate == '?faq'}
<Faq />
   {:else if locate == ''}
   <Home />
   {/if}
   <ScrollToTop />
   <Footer />
 </Notification>