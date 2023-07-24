import Papa from "papaparse";

type Link = {
  label: string;
  url: string;
  id: number;
};

const api = {
  links: {
    fetch: async () => {
      const res = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRIxWU7iODD2I49s2fNhK-BXPB7HVIiZS96iBtTs3KSkQvEdbT1uzjWhrb0tRt2cN_5LMB452qWKgvd/pub?gid=0&output=csv"
      );
      const data = await res.text();
      const parsed = await new Promise<Link[]>((resolve, reject) => {
        Papa.parse<Link>(data, {
          header: true,
          complete: (result) => resolve(result.data),
          error: reject,
        });
      });
      return parsed;
    },
  },
};

export default api;
