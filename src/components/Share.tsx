import './Share.css';
// ICONS
import { BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const sizeIcons = 45

interface ShareProps {
  description: string
}

function Share({description}: ShareProps) {
  const url = window.location.href;

  function ShareWebAPI() {
    if (navigator.share) {
      navigator.share({
          title: description,
          url: url
          })
          .catch(err => alert("Error Sharing: " + err))
    }
  }

  return (
      <div className='share-icon-collections'>
        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target='_blank'
        >
          <BsFacebook size={sizeIcons} />
        </a>

        {/* Twitter */}
        <a
          href={`https://twitter.com/intent/tweet?url=${url}&text=${encodeURI(
            description
          )}`}
          target='_blank'
        >
          <BsTwitter size={sizeIcons} />
        </a>

        {/* Linkedin */}
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
          target='_blank'
        >
          <BsLinkedin size={sizeIcons} />
        </a>

        {/* Email */}
        <a
          href={`mailto:info@example.com?&subject=You+have+to+See!&cc=&bcc=&body=Voici+le+lien+du+Portfolio+Yoann+Croguennec : ${url}\n${encodeURI(
            description
          )}`}
          target='_blank'
        >
          <MdEmail size={sizeIcons} />
        </a>
      </div>
  );
}

export default Share;
