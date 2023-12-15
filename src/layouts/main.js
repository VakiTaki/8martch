import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import WelcomePage from "../components/welcome";
import Plan from "../components/plan";
import Place from "../components/place";
import Time from "../components/time";
import Information from "../components/information";
import Button from "../components/form/button";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { getAuthInfo, yesAnswer, noAnswer } from "../services/apiService";
import Spinner from "../components/spinner";
import Show from "../components/show";

function Main() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get("token");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [isShowNo, setIsShowNo] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (code) {
      localStorage.setItem("token", code);
      navigate("/");
    } else {
      setToken(localStorage.getItem("token"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  const getInfo = (body) => {
    setLoading(true);
    getAuthInfo(body)
      .then((res) => setUser(res))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  const handleYes = (body) => {
    setLoading(true);
    yesAnswer(body)
      .then((res) => {
        if (res === 200) {
          getInfo(body);
          setIsShowNo(true);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  const handleNo = (body) => {
    setLoading(true);
    noAnswer(body)
      .then((res) => {
        if (res === 200) {
          getInfo(body);
          setIsShowNo(false);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (token) {
      getInfo({ token });
    }
  }, [token]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledHeight = window.scrollY;
      const totalDocumentHeight = document.body.scrollHeight;

      if (scrolledHeight + window.innerHeight >= totalDocumentHeight - 500) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className=" flex flex-col  justify-center relative ">
      {loading && <Spinner />}
      <WelcomePage />
      <Place />
      <Time />
      <Plan />
      <Show />
      <Information
        user={user}
        onYes={handleYes}
        onNo={handleNo}
        isShowNo={isShowNo}
      />
      {showButton && (
        <div
          className="fixed  p-2 bottom-4 right-4 animate-bounce  "
          onClick={scrollToBottom}
        >
          <Button label="" color={"#000000"}>
            <ArrowDownIcon className=" w-8 h-8 text-[#ffdb8b]" />
          </Button>
        </div>
      )}
    </div>
  );
}

export default Main;
