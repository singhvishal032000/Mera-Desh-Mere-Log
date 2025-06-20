import { setSingleCompany } from "@/redux/companySlice";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// export default function useGetCompanyById(companyId) {
//     const dispatch = useDispatch();
//   useEffect(() => {
//     const fetchSingleCompany = async () => {
//       try {
//         const res = await axios.get(`${COMPANY_API_END_POINT}/get/${companyId}`, {
//           withCredentials: true,
//         });
//         if (res.data.success) {
//           dispatch(setSingleCompany(res.data.company));
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchSingleCompany();
//   }, [companyId,dispatch]);
// }
export default function useGetCompanyById(companyId) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!companyId) return; // don't fetch if no id

    const fetchSingleCompany = async () => {
      try {
        const res = await axios.get(
          `${COMPANY_API_END_POINT}/get/${companyId}`,
          {
            withCredentials: true,
          }
        );

        if (res.data.success) {
          dispatch(setSingleCompany(res.data.company));
        } else {
          console.error("Failed to fetch company:", res.data.message);
        }
      } catch (error) {
        console.log("Fetch company error:", error);
      }
    };
    fetchSingleCompany();
  }, [companyId, dispatch]);
}
