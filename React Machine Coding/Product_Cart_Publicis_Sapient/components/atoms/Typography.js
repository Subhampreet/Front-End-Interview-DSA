const Typography = ({ variant = "p", children }) => {
    const Tag = variant;
    return <Tag className="text-gray-800">{children}</Tag>;
  };
  
  export default Typography;
  