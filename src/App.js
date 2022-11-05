import "./App.css";
import React, { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import axios from "axios";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Modal from "./components/Modal";

export default class App extends Component {
  state = {
    currentPage: 1,
    images: [],
    query: "",
    loading: false,
    per_page: 12,
    showModal: false,
    src: null,
  };

  componentDidMount() {
    const apiUrl = `https://pixabay.com/api/?key=30734236-da96c42bd2f0fc4ef14e90cce&q=${this.state.query}&image_type=photo&per_page=20&lang="ru"&page=1`;
    axios.get(apiUrl).then((resp) => {
      const allItem = resp.data.hits;
      this.setState({ images: allItem });
    });
  }

  componentDidUpdate() {
    const { loading } = this.state;
    if (loading) {
      return this.loadImages();
    }
  }

  onSubmit = (data) => {
    this.setState({
      images: [],
      query: data,
      loading: true,
    });
  };

  loadImages = async () => {
    const { per_page, currentPage, query } = this.state;
    try {
      const { data } = await axios.get(
        `https://pixabay.com/api/?key=30734236-da96c42bd2f0fc4ef14e90cce&q=${query}&image_type=photo&per_page=${per_page}&page=${currentPage}&lang="ru"`
      );
      const allItem = data.hits;
      this.setState(({ images }) => ({
        images: [...images, ...allItem],
        loading: false,
      }));
    } catch (error) {}
  };

  handleLoadMore = () => {
    this.setState(({ currentPage }) => ({
      currentPage: currentPage + 1,
      loading: true,
    }));
  };

  toggleModal = (src) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      src: src,
    }));
  };

  render() {
    const { showModal, src } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />

        <ImageGallery
          toggleModal={this.toggleModal}
          images={this.state.images}
        />

        <Button onClick={this.handleLoadMore} />

        {showModal && (
          <Modal closeModal={this.toggleModal}>
            {
              <img
                src={src}
                className="largeImageUrl"
                alt=""
                style={{
                  height: "80vh",
                  width: "100vw",
                  borderRadius: "5px",
                }}
              />
            }
          </Modal>
        )}
      </>
    );
  }
}
