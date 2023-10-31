import Image from "next/image"
import FaqQuestion from "./microComponents/FaqQuestion/FaqQuestion"

const Faq = () => {
  return (
    <div className="faq" id="faq">
      <div className="container">
        <h3 className="section-title">FAQ</h3>

        {/* Question One */}
        <FaqQuestion
          imgSrc="/images/80s-Pop.svg"
          imgWidth={110}
          imgHeight={52}
          question="What are Robotos?"
          imgAlt="80s Pop glasses"
        >
          <p>
            Robotos is a collection of algorithmically generated droid
            characters designed by{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <strong>Pablo Stanley</strong>
            </a>{" "}
            and minted as NFTs on the Ethereum blockchain. The 1st generation of
            10,000 droids will be constructed from various metal outfits, tin
            faces, digital accessories, top pieces, faces, backpacks, arms, and
            colors. Robotos have different body types, some rarer than others,
            and... there are rumors that you could find humans pretending to be
            robots too. Is it true? 🤔
          </p>
        </FaqQuestion>

        {/* Question Two */}
        <FaqQuestion
          imgSrc="/images/Body.svg"
          imgWidth={90}
          imgHeight={57}
          question="What do I get?"
          imgAlt="Box"
        >
          <p>
            You get different image assets of your Roboto, including an animated
            GIF, PNG, and SVG file (which is resolution free.)
          </p>

          <p>
            Each Roboto comes with rights to create and distribute derivatives.
            Read more on the{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <strong>license agreement</strong>
            </a>
            .
          </p>
        </FaqQuestion>

        {/* Question Three */}
        <FaqQuestion
          imgSrc="/images/Gradient-Shades.svg"
          imgWidth={120}
          imgHeight={57}
          question="How do I get my stuff?"
          imgAlt="Shades"
        >
          <p>
            The images & Roboto metadata will be released after Robotos NFTs
            sell out. We will update collectors via our{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <strong>Discord</strong>
            </a>{" "}
            with the date/time of when the content will be available. Once the
            metadata is updated, your Roboto GIF will appear on OpenSea, and you
            will be able to download the additional file formats from our
            website.
          </p>
        </FaqQuestion>

        {/* Question Four */}
        <FaqQuestion
          imgSrc="/images/light.svg"
          imgWidth={80}
          imgHeight={57}
          question="Why Robotos?"
          imgAlt="Light"
        >
          <p>
            By collecting Robotos you'll have a voice in the community and help
            guide the direction of the project and development of the story.
            Already some great ideas have come from the community. Working
            together we can continue the grow the Robotos ecosystem!
          </p>
        </FaqQuestion>

        {/* Question Five */}
        <FaqQuestion
          imgSrc="/images/Helmet.svg"
          imgWidth={90}
          imgHeight={57}
          question="What's on the roadmap?"
          imgAlt="Helmet"
        >
          <ul>
            <li>
              <strong>Roboto's backstory</strong> development and other
              characters that are part of the Roboto's universe.
            </li>
            <li>
              <strong>Roboto Gallery.</strong>
            </li>
            <li>
              <strong>Monthly Exclusive NFT.</strong> We might do collaborations
              with other artists and/or projects.
            </li>
            <li>
              <strong>Roboto Workshop</strong> limited to Roboto holders. We'll
              discuss this idea with our Discord community to see how to
              proceed.
            </li>
            <li>
              <strong>Robotos Gen 2</strong>. We'll collaborate with the
              community to determine the best way to implement breeding.
            </li>
          </ul>

          <p>
            Join our{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <strong>Discord</strong>
            </a>{" "}
            to have a voice on our roadmap.
          </p>
        </FaqQuestion>

        {/* Question Six */}
        <FaqQuestion
          imgSrc="/images/Ear.svg"
          imgWidth={72}
          imgHeight={57}
          question="What’s an NFT?"
          imgAlt="Ear"
        >
          <p>
            NFT stands for "Non-fungible token," which means that it's a unique,
            digital item with blockchain-managed ownership that users can buy,
            own, and trade. Some NFT's fundamental function is to be digital
            art. But they can also offer additional benefits like exclusive
            access to websites, event tickets, game items, and ownership records
            for physical objects. Think of it as a unique piece of art that can
            also work as a "members-only" card. Robotos works like this.
          </p>
        </FaqQuestion>

        {/* Question Seven */}
        <FaqQuestion
          imgSrc="/images/Exploded-Head.svg"
          imgWidth={72}
          imgHeight={57}
          question="How do I NFT?"
          imgAlt="Helmet"
        >
          <p>
            New to NFTs? No worries, here are some steps on what you need to do
            to get your Roboto.
          </p>
          <ol>
            <li>
              Download the{" "}
              <a href="#" target="_blank" rel="noopener noreferrer">
                <strong>metamask.io</strong>
              </a>{" "}
              extension for the Chrome/Brave browser or app on mobile. This will
              allow you to make purchases with Ethereum and can be found in the
              extensions tab. If you are on mobile, you must use the Metamask
              App Browser
            </li>
            <li>
              You can purchase Ethereum through the Metamask Wallet using Wyre
              or Send Ethereum from an exchange like{" "}
              <a href="#" target="_blank" rel="noopener noreferrer">
                <strong>Coinbase</strong>
              </a>
              .
            </li>
            <li>
              Click on{" "}
              <a href="#">
                <strong>Connect</strong>
              </a>{" "}
              at the top of the page and connect your Metamask. Once joined, you
              will be able to purchase the NFTs in the mint section. You will be
              prompted to sign your transaction. FYI, there will be a fee
              associated with every transaction related to gas prices.
            </li>
            <li>
              Once you have made your purchase, your Roboto NFTs will be
              viewable in your wallet and on{" "}
              <a href="#" target="_blank" rel="noopener noreferrer">
                <strong>OpenSea</strong>
              </a>
              .
            </li>
          </ol>

          <p>
            Join our{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <strong>Discord</strong>
            </a>{" "}
            to have a voice on our roadmap.
          </p>
        </FaqQuestion>
      </div>

      {/* Top */}
      <div className="head-images top">
        <div className="head-img-single">
          <Image
            src="/images/head11.svg"
            className="img-single _3"
            width={160}
            height={160}
            loading="lazy"
            alt=""
          />
        </div>
        <div className="head-img-single">
          <Image
            src="/images/head02.svg"
            className="img-single _3"
            width={160}
            height={160}
            loading="lazy"
            alt=""
          />
        </div>
        <div className="head-img-single">
          <Image
            src="/images/icon-256w.png"
            className="img-single _1"
            width={160}
            height={160}
            loading="lazy"
            alt=""
          />
        </div>
      </div>

      {/* Right */}
      <div className="head-images right">
        <div className="head-img-single">
          <Image
            src="/images/head23.svg"
            className="img-single"
            width={160}
            height={160}
            loading="lazy"
            alt=""
          />
        </div>

        <div className="head-img-single">
          <Image
            src="/images/head12.svg"
            className="img-single _1"
            width={160}
            height={160}
            loading="lazy"
            alt=""
          />
        </div>
        <div className="head-img-single">
          <Image
            src="/images/head21.svg"
            className="img-single _2"
            width={160}
            height={160}
            loading="lazy"
            alt=""
          />
        </div>
        <div className="head-img-single">
          <Image
            src="/images/head22.svg"
            className="img-single _3"
            width={160}
            height={160}
            loading="lazy"
            alt=""
          />
        </div>
        <div className="head-img-single">
          <Image
            src="/images/head20.svg"
            className="img-single _1"
            width={160}
            height={160}
            loading="lazy"
            alt=""
          />
        </div>
        <div className="head-img-single">
          <Image
            src="/images/head14.svg"
            className="img-single _2"
            width={160}
            height={160}
            loading="lazy"
            alt=""
          />
        </div>
        <div className="head-img-single">
          <Image
            src="/images/head18.svg"
            className="img-single _3"
            width={160}
            height={160}
            loading="lazy"
            alt=""
          />
        </div>
      </div>

      {/* Left */}
      <div className="head-images left">
        <div className="head-img-single">
          <Image
            src="/images/head04.svg"
            className="img-single"
            width={160}
            height={160}
            loading="lazy"
            alt=""
          />
        </div>
        <div className="head-img-single">
          <Image
            src="/images/head26.svg"
            className="img-single _1"
            width={160}
            height={160}
            loading="lazy"
            alt=""
          />
        </div>
        <div className="head-img-single">
          <Image
            src="/images/head29.svg"
            className="img-single _2"
            width={160}
            height={160}
            loading="lazy"
            alt=""
          />
        </div>
        <div className="head-img-single">
          <Image
            src="/images/head27.svg"
            className="img-single _3"
            width={160}
            height={160}
            loading="lazy"
            alt=""
          />
        </div>
        <div className="head-img-single">
          <Image
            src="/images/head25.svg"
            className="img-single _1"
            width={160}
            height={160}
            loading="lazy"
            alt=""
          />
        </div>
        <div className="head-img-single">
          <Image
            src="/images/head24.svg"
            className="img-single _2"
            width={160}
            height={160}
            loading="lazy"
            alt=""
          />
        </div>
        <div className="head-img-single">
          <Image
            src="/images/head05.svg"
            className="img-single _3"
            width={160}
            height={160}
            loading="lazy"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Faq
