/* eslint-disable no-unused-vars */
import React from 'react';
import {
  FaFacebook, FaInstagram, FaTwitter, FaYoutube, 
} from 'react-icons/fa';
import { Footer } from './styles';
import ItemsFooterHome from './singleComponents/ItemsFooter';

export default function FooterHome() {
  return (
    <Footer className="footer">
      <div>
        <div
          className="social-media-icons"
          style={
          {
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
          }
        }>
          <FaFacebook></FaFacebook>
          <FaInstagram></FaInstagram>
          <FaTwitter></FaTwitter>
          <FaYoutube></FaYoutube>
        </div>
        <ItemsFooterHome></ItemsFooterHome>
        <p className="final-considerations">
          Este é um projeto feito sem fins lucrativos, o intuido é apenas o incentivo ao conhecimento.
        </p>
      </div>
    </Footer>
  );
}
