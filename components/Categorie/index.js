import Services from "../../services";

class Categorie extends React.Component {
  handleBlur = (e) => {
    const newContent = e.target.textContent;
    const id = e.target.dataset.id;
    // const newContent = {
    //   component: 
    // };

    console.dir(e.target)

    Services.categorie.setContent(this.props.name, newContent, id);
  }

  render() {
    const { content } = this.props;

    const contentJSX = content.map(componentObject => {
      const Component = componentObject.component;
      return <Component
        contentEditable="true"
        data-id={componentObject.id}
        key={componentObject.id}
        onBlur={this.handleBlur}
      >
        {componentObject.textContent}
      </Component>;
    });

    return contentJSX;
  }
}

export default Categorie;