'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function ExamPage() {
  const router = useRouter();
  const violations = useRef(0);

  useEffect(() => {
    /* 🔒 FORCE FULLSCREEN */
    const forceFullscreen = async () => {
      try {
        if (!document.fullscreenElement) {
          await document.documentElement.requestFullscreen();
        }
      } catch {}
    };

    forceFullscreen();

    /* 🚨 VIOLATION HANDLER */
    const registerViolation = (reason: string) => {
      violations.current += 1;

      toast.error(`${reason} (${violations.current}/3)`);

      if (violations.current >= 3) {
        toast.error('Exam terminated due to violations');

        if (document.fullscreenElement) {
          document.exitFullscreen();
        }

        setTimeout(() => {
          router.push('/');
        }, 1500);
      }
    };

    /* ❌ BLOCK KEYS */
    const blockKeys = (e: KeyboardEvent) => {
      const forbidden = ['Escape', 'Tab', 'Alt', 'Control', 'Meta'];

      if (forbidden.includes(e.key)) {
        e.preventDefault();
        registerViolation(`${e.key} key not allowed`);
      }

      if (e.ctrlKey || e.altKey || e.metaKey) {
        e.preventDefault();
        registerViolation('Keyboard shortcut not allowed');
      }
    };

    /* ❌ TAB / WINDOW SWITCH */
    const handleVisibility = () => {
      if (document.hidden) {
        registerViolation('Tab or window switch detected');
      }
    };

    /* ❌ EXIT FULLSCREEN */
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        registerViolation('Fullscreen exit detected');
        forceFullscreen();
      }
    };

    /* ❌ RIGHT CLICK */
    const disableContextMenu = (e: MouseEvent) => e.preventDefault();

    window.addEventListener('keydown', blockKeys, true);
    document.addEventListener('visibilitychange', handleVisibility);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('contextmenu', disableContextMenu);

    return () => {
      window.removeEventListener('keydown', blockKeys, true);
      document.removeEventListener('visibilitychange', handleVisibility);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('contextmenu', disableContextMenu);
    };
  }, [router]);

  /* 🚪 EXIT BUTTON HANDLER */
  const exitExam = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    }
    router.push('/');
  };

  return (
    <div className="fixed inset-0 bg-black">
      {/* 🔴 EXIT BUTTON */}
      <button
        onClick={exitExam}
        className="absolute right-4 top-4 z-50 rounded bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
      >
        Exit Exam
      </button>

      {/* 🧪 EXAM IFRAME */}
      <iframe
        src="https://www.sanidhyamehra.tech/" // 🔗 replace with your exam link
        className="h-full w-full border-0"
        allow="fullscreen"
      />
    </div>
  );
}
