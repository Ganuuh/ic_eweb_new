"use client";
import { getDictionary } from "@/lib/dictionary";
import { Language } from "@/types/language_type";
import React, { createContext, useContext, useEffect, useState } from "react";

type LanguageProviderType = {
  header: any;
  loading: boolean;
};

const LanguageContext = createContext<LanguageProviderType>(
  {} as LanguageProviderType
);

export default function LanguageProvider({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: Language;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const [header, setHeader] = useState<any>({});

  useEffect(() => {
    const getTranslation = async () => {
      setLoading(true);
      const dict = await getDictionary(lang.lang);
      setHeader(dict.header);
      setLoading(false);
    };

    getTranslation();
  }, [lang.lang]);
  return (
    <LanguageContext.Provider value={{ loading, header }}>
      {loading ? null : children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => {
  return useContext(LanguageContext);
};
