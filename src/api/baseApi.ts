import Request from "@/hooks/axios";

const api = "";
const baseA = (params: any) => {
	return Request.get(`${api}/m/tenant`, params);
};
export default {
	baseA
};
