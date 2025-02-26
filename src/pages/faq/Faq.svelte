<script>

  import Heading from "../../components/heading/Heading.svelte";
  import Join from "../home/Join.svelte";

</script>
<main>
  <Heading title='Frequently Ask Question'/>
  <section>

    <details>
      <summary>
        Do you ship worldwide?
      </summary>
      Yes, Feel free to order from anywhere
    </details>
    <details>
      <summary>
        How do you receive international payment?
      </summary>
      Yes, Through payment agency
    </details>
    <details>
      <summary>
        How long will the product be deliver?
      </summary>
   Locally, within 3day, internationally, within 7days
    </details>
  </section>
<Join />
</main>
<style scoped>
  section{
    width: 100vw;
    padding: 3rem 10rem;
    height: 100vh;
    border-bottom: 2px solid var(--secondaryColor);
    border-top: 1px solid var(--secondaryColor);
  }
  details{
    font-size: 2rem;
    border: 2px solid var(--primaryColor);
    border-radius: 2rem;
    padding: 2rem;
    margin: 10px;
  }
  summary{
    list-style: none;
    border-bottom: 1px solid var(--primaryColor);
    padding: 10px 0;
    margin: 10px 0;
cursor: pointer;
  }
</style>