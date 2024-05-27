import styled from "styled-components";

const Hero = () => {
  const BUTTON = styled.button`
    padding: 12px 18px 12px 18px;
    gap: 8px;
    opacity: 0px;
    background: #0062ff;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.10000000149011612px;
    text-align: left;
    color: white;
    border: none;
    display: flex;
    align-items: center;
    border-radius: 15px;
  `;
  const SPAN1 = styled.span`
    display: flex;
    gap: 15px;
    width: 400px;
    align-items: center;
  `;

  const DIV1 = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
  `;

  const DIV2 = styled.div`
    width: 1400px;
    margin: 0 auto;
    border: 1px solid gray;
    padding: 20px;
    border-bottom: none;
    border-radius: 10px;
    margin-top: 50px;
  `;

  return (
    <>
      <DIV2>
        <DIV1>
          <SPAN1>
            <img src="./leftarrow.svg" alt="" />
            <h1>Yangi loyiha ochish</h1>
          </SPAN1>
          <BUTTON color="primary" size="lg" variant="solid">
            Davom etish <img src="./arrow-right.svg" alt="" />
          </BUTTON>
        </DIV1>
        <hr />
        <div className="flex flex-wrap gap-4 mt-4 justify-start p-5 bg-[#E2E2EA] rounded">
          <div className="text-[16px] border w-[250px] pt-[16px] pb-[16px] rounded-lg bg-white flex gap-3 pl-4 items-center">
            <img src="./logoSmall.png" alt="" />
            <h3>Bitbucket  </h3>
          </div>
          <div className="text-[16px] border w-[250px] pt-[16px] pb-[16px] rounded-lg bg-white flex gap-3 pl-4 items-center">
            {" "}
            <img src="./logoSmall1.png" alt="" />
            <h3>Dropbox Paper</h3>
          </div>
          <div className="text-[16px] border w-[250px] pt-[16px] pb-[16px] rounded-lg bg-white flex gap-3 pl-4 items-center">
            {" "}
            <img src="./logoSmall2.png" alt="" />
            <h3>Giphy</h3>
          </div>
          <div className="text-[16px] border w-[250px] pt-[16px] pb-[16px] rounded-lg bg-white flex gap-3 pl-4 items-center">
            {" "}
            <img src="./logoSmall3.png" alt="" />
            <h3>Google Calendar</h3>
          </div>
          <div className="text-[16px] border w-[250px] pt-[16px] pb-[16px] rounded-lg bg-white flex gap-3 pl-4 items-center">
            {" "}
            <img src="./logoSmall4.png" alt="" />
            <h3>Google Drive</h3>
          </div>
          <div className="text-[16px] border w-[250px] pt-[16px] pb-[16px] rounded-lg bg-white flex gap-3 pl-4 items-center">
            {" "}
            <img src="./logoSmall5.png" alt="" />
            <h3>Notion</h3>
          </div>
          <div className="text-[16px] border w-[250px] pt-[16px] pb-[16px] rounded-lg bg-white flex gap-3 pl-4 items-center">
            {" "}
            <img src="./logoSmall6.png" alt="" />
            <h3>Trello</h3>
          </div>
          <div className="text-[16px] border w-[250px] pt-[16px] pb-[16px] rounded-lg bg-white flex gap-3 pl-4 items-center">
            {" "}
            <img src="./logoSmall7.png" alt="" />
            <h3>Cloud Intercom</h3>
          </div>
          <div className="text-[16px] border w-[250px] pt-[16px] pb-[16px] rounded-lg bg-white flex gap-3 pl-4 items-center">
            {" "}
            <img src="./logoSmall8.png" alt="" />
            <h3>Google Tag Manager</h3>
          </div>
        </div>
      </DIV2>
    </>
  );
};

export default Hero;
