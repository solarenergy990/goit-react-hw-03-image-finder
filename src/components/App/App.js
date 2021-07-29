import React, { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import ImageGallery from "../ImageGallery/ImageGallery";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Container from "../Container/Container";
import s from "./App.module.css";
import imageAPI from "../services/image-api";

class App extends Component {
  state = {
    pictures: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
    openModal: false,
  };

  handleFormSubmit = (searchQuery) => {
    const query = searchQuery;
    const page = 1;

    // console.log(searchQuery);
    this.setState({
      searchQuery,
      currentPage: page,
      pictures: [],
      isLoading: true,
      largeImg: "",
    });

    this.fetchPictures(query, page);
  };

  fetchPictures = (query, page) => {
    // console.log(this.state.currentPage);
    // console.log(this.state.pictures);

    return imageAPI.fetchImage(query, page).then((pictures) => {
      this.setState((prevState) => ({
        pictures: [...prevState.pictures, ...pictures],
        currentPage: prevState.currentPage + 1,
        isLoading: false,
      }));
      if (this.state.pictures.length === 0) {
        alert("Nothing found!");
      }
    });
  };

  scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  onLoadMore = () => {
    const { currentPage, searchQuery } = this.state;

    this.setState({ isLoading: true });
    this.fetchPictures(searchQuery, currentPage).finally(this.scrollDown);
  };

  setLargeImg = (imgLink) => {
    // console.log(imgLink);
    return this.setState(({ largeImg }) => ({ largeImg: imgLink }));
  };

  onLargeImgOpen = (imgLink) => {
    // console.log(imgLink);
    this.setLargeImg(imgLink);
    this.modalToggler();
  };

  modalToggler = () => {
    this.setState(({ openModal }) => ({ openModal: !openModal }));
  };

  render() {
    const { pictures, openModal, isLoading, largeImg, searchQuery } =
      this.state;

    return (
      <div className={s.App}>
        {openModal && (
          <Modal onModalClose={this.modalToggler}>
            <img src={largeImg} alt={searchQuery} />
          </Modal>
        )}
        <Searchbar onSubmit={this.handleFormSubmit} />
        <Container>
          <ImageGallery imageArr={pictures} onModalOpen={this.onLargeImgOpen} />
        </Container>

        <Container>
          {isLoading && (
            <Loader type="Grid" color="#00BFFF" height={80} width={80} />
          )}
          {pictures.length > 0 && !isLoading && (
            <Button onClick={this.onLoadMore} />
          )}
        </Container>
      </div>
    );
  }
}

export default App;
