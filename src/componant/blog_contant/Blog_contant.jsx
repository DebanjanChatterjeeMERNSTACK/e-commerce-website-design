import "./Blog_contant.css";
// import fb from "../assets/facebook.png";
// import git from "../assets/git.png";
// import youtube from "../assets/youtube.png";
// import next from "../assets/next.png";
// import Recently from "../recently/Recently";

import Blog_hero from "../blog_hero/Blog_hero";

const Blog_contant = () => {
  return (
    <>
    <Blog_hero/>
      <div className="Blog_contant_contaner">
        <div className="Blog_contant_maxwidth">
          <div className="Blog_contant_contant">
            <div>
            <h1>The Pleasure</h1>
            <p>
              Lorem markdownum obvius in seque opus, est bicorni forte; laeva.
              Iurant patria beatam semel communis et atra qua fugit, solet
              invicti cui inter patulas regibus remolliat volumina sorori?
              Quidem miscentem regna interea natura in adligat, aenum onere
              placere lympha. Sunt tantum intentare exhortatus avidas Scythides
              lacrimis imitatus prohibent terraeque donec ulterius thalamosque
              fero comitantibus. Tela cervicem insiluit locis, falsa et umida
              ulterius digitos excipiunt! Facto adversaque telum, stirpe? Sic et
              illi praesepia agna esse quas siluere capax sim tangi iubebit
              furtim cuncta, tutaeque ob utque stagni spargere. Totum silva
              feramus haec terras lacus omnia talia!
            </p>
            </div>
            {/* <hr />
            <div className="social_icon">
              <p>
                <img src={next} />
              </p>
              <p>
                <img src={fb} />
              </p>
              <p>
                <img src={git} />
              </p>
              <p>
                <img src={youtube} />
              </p>
            </div> */}
            <hr/>
            <div className="comment">
              <textarea rows="10"  placeholder="Comment here...."></textarea>
              <button className="button2"> Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog_contant;
