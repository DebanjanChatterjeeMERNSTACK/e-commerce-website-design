import "./Accordion.css";

const Accordion = () => {
  return (
    <>
      <div className="product_details_contaner">
        <div className="product_Accordion_maxwidth">
          <details className="accordion">
            <summary className="accordion-btn">Acc 1</summary>
            <div className="accordion-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                nesciunt, iste ut incidunt officia maxime impedit sit eligendi
                labore inventore, reprehenderit excepturi voluptas sequi eos
                dolorem voluptatibus porro voluptate dolorum.
              </p>
            </div>
          </details>
          <details className="accordion">
            <summary className="accordion-btn">Acc 2</summary>
            <div className="accordion-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                nesciunt, iste ut incidunt officia maxime impedit sit eligendi
                labore inventore, reprehenderit excepturi voluptas sequi eos
                dolorem voluptatibus porro voluptate dolorum.
              </p>
            </div>
          </details>
          <details className="accordion">
            <summary className="accordion-btn">Acc 3</summary>
            <div className="accordion-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                nesciunt, iste ut incidunt officia maxime impedit sit eligendi
                labore inventore, reprehenderit excepturi voluptas sequi eos
                dolorem voluptatibus porro voluptate dolorum.
              </p>
            </div>
          </details>
        </div>
      </div>
    </>
  );
};
export default Accordion;
