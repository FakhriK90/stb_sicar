/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Col } from "react-bootstrap";
import "./Fonds.css";

const NosFond = () => {
  return (
    <div>
      <div id="fond">
        <div className="contai borderXwidth">
          <a className="nos_invest">NOS INVESTISSEURS</a>
        </div>
        <div className="contenu_carou_auto">
          <div className="caroussel-image">
            <img src={require("../../image/STB_BANK.png")} alt="" />
            <img src={require("../../image/Banque_Euro.png")} alt="" />
            <img src={require("../../image/STB_INVEST.jpg")} alt="" />
            <img src={require("../../image/FOPRODI.jpg")} alt="" />
          </div>
        </div>
      </div>
      <div id="fisc">
        <div className="contai borderXwidth">
          <a href="" className="nos_invest">OPTIMISEZ VOTRE FISCALITE</a>
        </div>
        <div className="l-container">
          <div className="avac">
            <img
              src={require("../../image/Revenus avec minimum d'impôt.png")}
              alt=""
            />
            <h3>
              35% des revenus ou bénéfices imposables avec minimum d'impôt{" "}
            </h3>
          </div>
          <div className="avac">
            <img
              src={require("../../image/Revenus sans minimum d'impôt.png")}
              alt=""
            />
            <h3>
              100% des revenus ou bénéfices imposables sans minimum d'impôt
            </h3>
          </div>
        </div>
      </div>
      <div className="wrapper">
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1541424273754-31e974582772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"alt=""
        />
        <div className="info">
          <h1>Délai</h1>
          <p>-	Les investisseurs bénéficient de l’avantage fiscal l’année de libération du fonds.</p>
          <p>-	Néanmoins l’obligation d’utilisation des montants déposés est de 2 ans à partir de l’année de libération.</p>
        </div>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1541424273754-31e974582772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt=""
        />
        <div className="info">
          <h1>Blocage des fonds</h1>
          <p>-	Le fonds géré est bloqué auprès de la STB SICAR pendant cinq ans à partir du 1er janvier de l’année qui suit celle du dépôt des fonds.</p>
          
        </div>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1541424273754-31e974582772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt=""
        />
        <div className="info">
          <h1>Rémunération</h1>
          <p>-	De la rémunération des fonds à des conditions très avantageuses jusqu’à leur utilisation dans des projets ayant obtenu au préalable son accord de participation.</p>
          <p>-	Du produit des intérêts des OCA/CCA souscrits.</p>
          <p>-	Des revenus du portefeuille d’investissement.</p>
          <p>-	Des dividendes distribués.</p>
        </div>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1541424273754-31e974582772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt=""
        />
        <div className="info">
          <h1>Autre avantage</h1>
          <p>-	Est déductible du bénéfice imposable, la plus-value de cession d’actions et des parts sociales réalisées.</p>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default NosFond;
