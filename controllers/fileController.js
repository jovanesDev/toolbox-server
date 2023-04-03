import { optimizeData } from "../helper/files.helper.js";
import axiosClient from "../service/index.js";

const getFiles = async (req, res) => {
  const params = req.query;
  try {
    const response = await axiosClient.get("/files");
    const files = response.data?.files;
    const promises = files.map(async (file) => {
      try {
        const result = await axiosClient.get(`/file/${file}`);
        const text = result.data;
        const final = optimizeData(text);
        if (Object.keys(final).length) {
          return final[file];
        }
      } catch (error) {
        console.log(`error al obtener la info del archivo ${file}`);
      }
    });
    const result = await Promise.all(promises);
    if (params?.fileName && result.length > 1) {
      const finalResultFile = result.find(
        (item) => item?.file.toLowerCase() === params?.fileName.toLowerCase()
      );
      res.status(200).send(finalResultFile ? [finalResultFile] : []);
    }
    const finalResultFiles = result.filter(Boolean);
    res.status(200).send(finalResultFiles);
  } catch (error) {
    res.status(500).send("Internal Error");
  }
};

const getFilesList = async (req, res) => {
  try {
    const response = await axiosClient.get("/files");
    res.status(200).send(response.data);
  } catch (error) {
    console.log("Internal error");
  }
};

export { getFiles, getFilesList };
