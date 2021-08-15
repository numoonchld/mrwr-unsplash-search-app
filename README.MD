# Unsplash Image Search React App

- uses Axios for making API calls to Unsplash
- Unsplash developer account has to be setup to get the access key

## Usage

- go to the search bar, type in search term and hit enter 
- 10 images will be loaded from Unsplash API and will be loaded below the search bar

## Developer Notes

- uses custom span calculation 
  - uses `React.createRef()` to gather the image height after render and allot spans each image instance
- Components bases `ImageTile` element to use Refs along with State Management

# MRWR Class Work

- this app is built as class work for `Modern React With Redux` Udemy course