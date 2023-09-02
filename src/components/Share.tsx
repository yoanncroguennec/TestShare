import './Share.css';
// ICONS
import { BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const sizeIcons = 45

interface ShareProps {
  description: string
}

function Share({description}: ShareProps) {
  // Get the URL and title of the current page dynamically
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const title =
    typeof document !== "undefined"
      ? document.title
      : "Check out this awesome content!";


  const url = window.location.href;

  function ShareWebAPI() {
    if (navigator.share) {
      navigator
        .share({
          title: description,
          url: url,
        })
        .catch((err) => alert("Error Sharing: " + err));
    }
  }

  return (
    <div className='share-icon-collections'>
      <div className='App'>
        <div className='main'>
          <h1>Hello Coders!</h1>
        </div>
        <div className='share-buttons'>
          <FacebookShareButton
          //url={shareUrl}
          url="yoann-croguennec.com"
          quote={title}>
            Share on Facebook
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl} title={title}>
            Share on Twitter
          </TwitterShareButton>
          <WhatsappShareButton url={shareUrl} title={title}>
            Share on WhatsApp
          </WhatsappShareButton>
        </div>
      </div>
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
