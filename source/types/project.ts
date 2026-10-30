type ProjectImage = {
  src: string;
  width: number;
  height: number;
};

type Project = {
  description?: string;
  image?: ProjectImage;
  name: string;
  url: string;
};

export default Project;
