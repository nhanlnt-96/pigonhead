import React, {useEffect, useState} from "react";
import {Alert, Box, Container, Grid, Snackbar} from "@mui/material";
import HeaderComp from "../header/HeaderComp";
// import TypewriterComponent from "typewriter-effect";
import {CountDownComp} from "./components/CountDownComp";
import BannerImg from "../../assets/imgs/bannerImg.png";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/data/dataActions";
import * as s from "../../styles/globalStyles";
import {connect} from "../../redux/blockchain/blockchainActions";
import {ResponsiveWrapper, StyledButton, StyledLink, StyledRoundButton, truncate} from "./styleComponent";

import "./BannerComp.scss";

const BannerComp = () => {
  const [showLeftTopContent, setShowLeftTopContent] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });
  
  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };
  
  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };
  
  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };
  
  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };
  
  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };
  
  useEffect(() => {
    getConfig();
  }, []);
  
  useEffect(() => {
    getData();
  }, [blockchain.account]);
  useEffect(() => {
    if (blockchain.errorMsg) {
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 2000);
    }
  }, [blockchain.errorMsg]);
  return (
    <Container className="banner-comp comp-height" maxWidth>
      <HeaderComp/>
      <Container className="banner-comp-container">
        <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "right"}} open={showSnackbar} onClose={!showSnackbar}
                  autoHideDuration={2000}>
          <Alert severity="error">{blockchain.errorMsg}</Alert>
        </Snackbar>
        <Grid container spacing={5} className="banner-comp-content">
          {/*<Grid item xs={12} lg={6} md={6} className="banner-comp-content-left">*/}
          {/*  <Box data-aos="zoom-in" className="left-top-container">*/}
          {/*    <div className="img-container">*/}
          {/*      <img data-aos="zoom-in" src={BannerImg} alt="pigeonheade"/>*/}
          {/*    </div>*/}
          {/*    <div className="title-container">*/}
          {/*      <div className="title">*/}
          {/*        <TypewriterComponent*/}
          {/*          onInit={(typewriter) => {*/}
          {/*            typewriter.typeString("Welcome to the Pigeonhead flock.").start().callFunction(() => {*/}
          {/*              setShowLeftTopContent(true);*/}
          {/*            });*/}
          {/*          }}*/}
          {/*        />*/}
          {/*      </div>*/}
          {/*      <p style={{display: !showLeftTopContent && "none"}} className="content">Our goal is to create the Most*/}
          {/*        stylish NFT Collection possible that will make you stand out in the Metaverse</p>*/}
          {/*    </div>*/}
          {/*  </Box>*/}
          {/*</Grid>*/}
          <Grid item className="banner-comp-content-right">
            <Box className="img-header">
              <img src={BannerImg} alt="pigeonheader"/>
            </Box>
            <Box data-aos="zoom-in" className="countdown-section">
              <CountDownComp/>
            </Box>
            <Box className="content-right-bottom">
              {
                !blockchain.account ? (
                  <div className="button-footer">
                    <a data-aos="zoom-in" className="button-item" onClick={(e) => {
                      e.preventDefault();
                      dispatch(connect());
                      getData();
                    }}>
                      <span className="btn-name">Mint Now</span>
                    </a>
                  </div>
                ) : (
                  <ResponsiveWrapper data-aos="zoom-in" flex={1} test>
                    <s.Container
                      flex={2}
                      jc={"center"}
                      ai={"center"}
                      style={{
                        backgroundColor: "rgba(36, 44, 49, .5)",
                        padding: 24,
                        borderRadius: 15
                      }}
                    >
                      <s.TextTitle
                        style={{
                          textAlign: "center",
                          fontSize: 50,
                          fontWeight: "bold",
                          color: "var(--accent-text)",
                        }}
                      >
                        {data.totalSupply} / {CONFIG.MAX_SUPPLY}
                      </s.TextTitle>
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "var(--primary-text)",
                        }}
                      >
                        <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                          {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
                        </StyledLink>
                      </s.TextDescription>
                      <s.SpacerSmall/>
                      {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                        <>
                          <s.TextTitle
                            style={{textAlign: "center", color: "var(--accent-text)"}}
                          >
                            The sale has ended.
                          </s.TextTitle>
                          <s.TextDescription
                            style={{textAlign: "center", color: "var(--accent-text)"}}
                          >
                            You can still find {CONFIG.NFT_NAME} on
                          </s.TextDescription>
                          <s.SpacerSmall/>
                          <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                            {CONFIG.MARKETPLACE}
                          </StyledLink>
                        </>
                      ) : (
                        <>
                          <s.TextTitle
                            style={{textAlign: "center", color: "var(--accent-text)"}}
                          >
                            1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                            {CONFIG.NETWORK.SYMBOL}.
                          </s.TextTitle>
                          <s.SpacerXSmall/>
                          <s.TextDescription
                            style={{textAlign: "center", color: "var(--accent-text)"}}
                          >
                            Excluding gas fees.
                          </s.TextDescription>
                          <s.SpacerSmall/>
                          {blockchain.account === "" ||
                          blockchain.smartContract === null ? (
                            <s.Container ai={"center"} jc={"center"}>
                              <s.TextDescription
                                style={{
                                  textAlign: "center",
                                  color: "var(--accent-text)",
                                }}
                              >
                                Connect to the {CONFIG.NETWORK.NAME} network
                              </s.TextDescription>
                              {blockchain.errorMsg !== "" ? (
                                <>
                                  <s.SpacerSmall/>
                                  <s.TextDescription
                                    style={{
                                      textAlign: "center",
                                      color: "var(--accent-text)",
                                    }}
                                  >
                                    {blockchain.errorMsg}
                                  </s.TextDescription>
                                </>
                              ) : null}
                            </s.Container>
                          ) : (
                            <>
                              <s.TextDescription
                                style={{
                                  textAlign: "center",
                                  color: "var(--accent-text)",
                                }}
                              >
                                {feedback}
                              </s.TextDescription>
                              <s.SpacerMedium/>
                              <s.Container ai={"center"} jc={"center"} fd={"row"}>
                                <StyledRoundButton
                                  style={{lineHeight: 0.4}}
                                  disabled={claimingNft ? 1 : 0}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    decrementMintAmount();
                                  }}
                                >
                                  -
                                </StyledRoundButton>
                                <s.SpacerMedium/>
                                <s.TextDescription
                                  style={{
                                    textAlign: "center",
                                    color: "var(--accent-text)",
                                  }}
                                >
                                  {mintAmount}
                                </s.TextDescription>
                                <s.SpacerMedium/>
                                <StyledRoundButton
                                  disabled={claimingNft ? 1 : 0}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    incrementMintAmount();
                                  }}
                                >
                                  +
                                </StyledRoundButton>
                              </s.Container>
                              <s.SpacerSmall/>
                              <s.Container ai={"center"} jc={"center"} fd={"row"}>
                                <StyledButton
                                  disabled={claimingNft ? 1 : 0}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    claimNFTs();
                                    getData();
                                  }}
                                >
                                  {claimingNft ? "BUSY" : "BUY"}
                                </StyledButton>
                              </s.Container>
                            </>
                          )}
                        </>
                      )}
                    </s.Container>
                  </ResponsiveWrapper>
                )
              }
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
    ;
};

export default BannerComp;